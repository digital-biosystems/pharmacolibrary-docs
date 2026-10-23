<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;meprobamate&quot;}]"></div>

# meprobamate

- **generic name:** meprobamate
- **ATC codes:** `N05BC01`
- **DrugBank:** [DB00371](https://go.drugbank.com/drugs/DB00371) · **PubChem:** [CID 4064](https://pubchem.ncbi.nlm.nih.gov/compound/4064)
- **molar mass:** 218.2502 g/mol (C9H18N2O4) — DrugBank
- **groups:** approved, illicit

## About

Meprobamate is an anxiolytic and sedative drug used for anxiety disorders, and also for headache, spasm and spasticity. It is an approved medicine, though it also has illicit use; it is not authorised in the European Union and is now used only to a limited extent.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418351](https://www.wikidata.org/wiki/Q418351) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| meprobamate | parent | — (mass units only) | C9H18N2O4 | — | [4064](https://pubchem.ncbi.nlm.nih.gov/compound/4064) | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Lewandowski_2017_reference](drugs/drug_meprobamate/Meprobamate_Lewandowski2017_reference.md) | — | parent + metabolite (no model) | 0 | Lewandowski TA, Pharmacokinetic modeling of carisoprodo…, Human & experimental toxico… (2017) | [10.1177/0960327116672912](https://doi.org/10.1177/0960327116672912) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:35 | 0:57 | 0/1/0 | 0/0/0 | 0/0/0 | 64,752/2,951 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lewandowski_2017.pdf` | Lewandowski TA, Pharmacokinetic modeling of carisoprodo…, Human & experimental toxico… (2017) | popPK | 8 | [10.1177/0960327116672912](https://doi.org/10.1177/0960327116672912) | [27758843](https://pubmed.ncbi.nlm.nih.gov/27758843) | Meprobamate is modeled as the metabolite of carisoprodol with Vd values (1.4–1.6 L/kg) given in the abstract, though full parameter values may reside in the paper's tables/figures not provided. |
| `Verpooten_1982.pdf` | Verpooten GA et al., Prediction of the efficacy of hemoperfu…, Archives of toxicology. Sup… (1982) | popPK | 5 | [10.1007/978-3-642-68511-8_54](https://doi.org/10.1007/978-3-642-68511-8_54) | [6954915](https://pubmed.ncbi.nlm.nih.gov/6954915) | Meprobamate PK modeled in poisoned patients, but no numeric parameter values are present in the evidence. |

<sub>queue written 2026-10-06T19:34:28.218234+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Calvo_2022_2 | relevant | 5 | 2 | This is the PD companion paper; meprobamate (as active metabolite of carisoprodol) PK was characterized but the numeric parameters (AUC, Cmax, etc.) are deferred to Part I [11], with only Tmax (3.77 h) given here. |
| popPK | Verpooten_1982 | relevant | 5 | 2 | Meprobamate PK modeled in poisoned patients, but no numeric parameter values are present in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 19:34 UTC</sub>
