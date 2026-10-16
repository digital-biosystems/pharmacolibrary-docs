<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;tolazoline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tolazoline_Casbeer2013_reference&quot;,&quot;label&quot;:&quot;Casbeer_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolazoline/Tolazoline_Casbeer2013_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tolazoline

- **generic name:** tolazoline
- **ATC codes:** `C04AB02`, `M02AX02`
- **DrugBank:** [DB00797](https://go.drugbank.com/drugs/DB00797) · **PubChem:** [CID 5504](https://pubchem.ncbi.nlm.nih.gov/compound/5504)
- **molar mass:** 160.2157 g/mol (C10H12N2) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Tolazoline is a vasodilator that was used for circulatory disorders such as Raynaud disease, thrombophlebitis, thromboangiitis obliterans, arteriosclerosis obliterans, systemic scleroderma, causalgia, and persistent fetal circulation syndrome. It has been withdrawn for human use but remains an approved veterinary drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413772](https://www.wikidata.org/wiki/Q413772) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tolazoline | parent | 160.216 | C10H12N2 | DrugBank | [5504](https://pubchem.ncbi.nlm.nih.gov/compound/5504) | Casbeer_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:29 | 2:16 | 1/0/0 | 1/0/0 | 0/0/0 | 35,138/4,370 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Casbeer_2013_reference](drugs/drug_tolazoline/Tolazoline_Casbeer2013_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Casbeer HC et al., Pharmacokinetics and pharmacodynamic ef…, Veterinary journal (London,… (2013) | [10.1016/j.tvjl.2012.12.006](https://doi.org/10.1016/j.tvjl.2012.12.006) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Rogers_1994_vascular_resistance](drugs/drug_tolazoline/pd_Rogers_1994_vascular_resistance.md) | vascular resistance ← tolazoline · direct sigmoid Emax (Hill) effect | — | Rogers RA et al., Pharmacologic modulation of the cutaneo…, Journal of pharmaceutical s… (1994) | [10.1002/jps.2600831208](https://doi.org/10.1002/jps.2600831208) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tolazoline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), ADRA2B (binder), ADRA2C (binder), DRD2 (target), HRH1 (target), HRH2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Casbeer_2013.pdf` | Casbeer HC et al., Pharmacokinetics and pharmacodynamic ef…, Veterinary journal (London,… (2013) | popPK | 10 | [10.1016/j.tvjl.2012.12.006](https://doi.org/10.1016/j.tvjl.2012.12.006) | [23321455](https://pubmed.ncbi.nlm.nih.gov/23321455) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for tolazoline in horses, with all numeric values explicitly provided in the abstract. |

<sub>queue written 2026-10-06T20:27:13.820529+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baños_1988 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of adrenergic mechanisms in rat muscle, not a pharmacokinetic study of tolazoline. |
| popPK | Costa_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of adrenergic receptors, not a pharmacokinetic study, and tolazoline is used only as a comparator agent. |
| popPK | Dunne_1991 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of channel blocking by tolazoline, not a pharmacokinetic study. |
| PD | Dunne_1991 | not_relevant | 3 | 2 | The paper reports a qualitative observation that tolazoline blocks K+ATP channels at 25 microM, but provides no numeric PD parameters (like Ki or IC50) or dose-response curve for tolazoline, unlike the detailed analysis provided for phentolamine. |
| popPK | Fuder_1986 | irrelevant | 0 | 0 | The study is a pharmacological investigation of adrenoceptor affinity and efficacy in rat hearts, not a pharmacokinetic study of tolazoline. |
| popPK | Ishikawa_1996 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of a different compound (IBI) in rabbit iris muscles, with tolazoline mentioned only as a structural parent for comparison, and no PK parameters are reported. |
| PD | Ishikawa_1996 | not_relevant | 0 | 0 | The paper investigates the pharmacology of isothiocyanatobenzyl imidazoline (IBI) and only qualitatively mentions tolazoline as a parent molecule without providing any PD data or parameters for tolazoline. |
| popPK | Lei_1998 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of tolazoline derivatives on calcium channels in vitro and in animal tissues, not the pharmacokinetic disposition parameters of tolazoline. |
| popPK | Rogers_1994 | irrelevant | 0 | 0 | The study is an ex vivo pharmacological calibration of vascular resistance in porcine skin flaps, not a pharmacokinetic study reporting disposition parameters for tolazoline. |
| popPK | Williams_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lidocaine, with tolazoline used only as a co-administered vasoactive agent to modulate skin blood flow. |
| PGx | Yan_2017 | not_relevant | 0 | 0 | The paper reports tolazoline as an inhibitor of CYP4Z1 in a recombinant yeast system, not a pharmacogenomic effect on tolazoline's PK/PD parameters. |
| popPK | Yoshida_2008 | irrelevant | 0 | 0 | Tolazoline is used as a vasoactive agent to modify the pharmacokinetics of model compounds (salicylate and FITC-dextran), not as the subject drug for PK parameter estimation. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:27 UTC</sub>
