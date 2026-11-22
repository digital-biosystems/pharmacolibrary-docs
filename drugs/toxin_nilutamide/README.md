<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Nilutamide&quot;}]"></div>

# Nilutamide

- **generic name:** Nilutamide
- **T3DB:** [T3D4783](http://www.t3db.ca/toxins/T3D4783) · **DrugBank:** [DB00665](https://go.drugbank.com/drugs/DB00665) · **PubChem:** [CID 4493](https://pubchem.ncbi.nlm.nih.gov/compound/4493)
- **groups:** approved, investigational

## About

Nilutamide is an antineoplastic hormonal agent primarily used in the treatment of prostate cancer. Nilutamide is a pure, nonsteroidal anti-androgen with affinity for androgen receptors (but not for progestogen, estrogen, or glucocorticoid receptors). Consequently, Nilutamide blocks the action of androgens of adrenal and testicular origin that stimulate the growth of normal and malignant prostatic tissue. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** rapidly and completely absorbed, yielding high and persistent plasma concentrations.
- **Sources and uses:** For use in combination with surgical castration for the treatment of metastatic prostate cancer involving distant lymph nodes, bone, or visceral organs (Stage D2).
- **Mechanism of toxicity:** Nilutamide competes with androgen for the binding of androgen receptors, consequently blocking the action of androgens of adrenal and testicular origin that stimulate the growth of normal and malignant prostatic tissue. This blockade of androgen receptors may result in growth arrest or transient tumor regression through inhibition of androgen-dependent DNA and protein synthesis.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4783">T3DB T3D4783</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 63612-50-0 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:7573">ChEBI 7573</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nilutamide | parent | 317.223 | C12H10F3N3O4 | PubChem | [4493](https://pubchem.ncbi.nlm.nih.gov/compound/4493) | Creaven_1991 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human + animal" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.40).">human + animal</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q91 — no SI value to build from</sub> | [Creaven_1991_reference](drugs/toxin_nilutamide/Nilutamide_Creaven1991_reference.md) | held back | 1-compartment, IV | 3 | Creaven PJ et al., Pharmacokinetics and metabolism of nilu…, Urology (1991) | [10.1016/0090-4295(91)80096-p](https://doi.org/10.1016/0090-4295(91)80096-p) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Camus_1991_reference](drugs/toxin_nilutamide/Nilutamide_Camus1991_reference.md) | — | 1-compartment (no model) | 0 | Camus P et al., Pharmacokinetics and metabolism of nilu…, The Journal of pharmacology… (1991) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-14 07:58 | 2:28 | 1/1/0 | 0/0/0 | 0/0/0 | 75,096/16,441 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Creaven_1991.pdf` | Creaven PJ et al., Pharmacokinetics and metabolism of nilu…, Urology (1991) | popPK | 10 | [10.1016/0090-4295(91)80096-p](https://doi.org/10.1016/0090-4295(91)80096-p) | [1992598](https://pubmed.ncbi.nlm.nih.gov/1992598) | Abstract directly reports numeric t1/2, clearance; AUC, bioavailability, and excretion values for nilutamide in rat and humans; some values only summarized (e.g., 7 h t1/2, 150 mL/h/kg clearance in rat, 56 ± 19 h in humans). |
| `Pendyala_1988.pdf` | Pendyala L et al., Pharmacokinetics of Anandron in patient…, Cancer chemotherapy and pha… (1988) | popPK | 10 | [10.1007/BF00254185](https://doi.org/10.1007/BF00254185) | [3396147](https://pubmed.ncbi.nlm.nih.gov/3396147) | Reports quantitative human PK parameters for nilutamide directly in the abstract (half-lives, AUC fractions, urinary/fecal excretion, steady-state levels). |
| `Camus_1991.pdf` | Camus P et al., Pharmacokinetics and metabolism of nilu…, The Journal of pharmacology… (1991) | popPK | 8 |  | [1762072](https://pubmed.ncbi.nlm.nih.gov/1762072) | Reports quantitative nilutamide uptake, T/M ratios, and metabolite percentages from rat isolated perfused lung with numeric values present in the abstract. |

<sub>queue written 2026-11-14 07:57 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boelsterli_2006 | irrelevant | 0 | 0 | Mechanistic review of nitroaromatic bioactivation mentioning nilutamide qualitatively with no kinetic parameters or numeric values. |
| popPK | Dole_1997 | irrelevant | 4 | 1 | A review/critical analysis of published literature on nilutamide pharmacokinetics with no original numeric parameters present in the evidence. |
| popPK | Gomez_2000 | irrelevant | 0 | 0 | Nilutamide is only one of several antiandrogens tested for pharmacodynamic effects on Fcγ receptor expression in guinea pigs; no toxicokinetic parameters for nilutamide are reported. |
| popPK | Mahler_1998 | irrelevant | 3 | 1 | Review narrative on clinical pharmacokinetics with no numeric kinetic parameters for nilutamide in the evidence. |
| popPK | Pendyala_1987 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |
| popPK | Takegami_2016 | irrelevant | 3 | 7 | This is an in vitro drug-delivery formulation study measuring nilutamide's partition coefficient into a lipid nano-emulsion carrier, not any in vivo toxicokinetic parameter (no half-life, clearance, metabolism or whole-body disposition); numeric Kp values are nonetheless present in Table I. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnilutamide%5D&body=Drug%3A%20nilutamide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_nilutamide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-14 07:57 UTC</sub>
