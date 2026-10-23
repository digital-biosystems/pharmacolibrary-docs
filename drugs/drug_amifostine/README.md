<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;amifostine&quot;}]"></div>

# amifostine

- **generic name:** amifostine
- **ATC codes:** `V03AF05`
- **DrugBank:** [DB01143](https://go.drugbank.com/drugs/DB01143) · **PubChem:** [CID 2141](https://pubchem.ncbi.nlm.nih.gov/compound/2141)
- **molar mass:** 214.223 g/mol (C5H15N2O3PS) — DrugBank
- **groups:** approved

## About

Amifostine is a detoxifying agent used to protect healthy tissue from side effects of cancer chemotherapy or radiotherapy. It is an approved medicine, used mainly in oncology settings alongside antineoplastic treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q251698](https://www.wikidata.org/wiki/Q251698) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Marzatico_2000_OH_scavenging](drugs/drug_amifostine/pd_Marzatico_2000_OH_scavenging.md) | Scavenging of hydroxyl radicals (OH-) by amifostine ← amifostine (WR-2721) · inhibition effect | — | Marzatico F et al., In vitro antioxidant properties of amif…, Cancer chemotherapy and pha… (2000) | [10.1007/s002800050026](https://doi.org/10.1007/s002800050026) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=amifostine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ALPG (inducer), ALPL (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:20 | 0:37 | 0/0/0 | 0/1/0 | 0/0/0 | 60,959/1,218 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | DeLouise_2023 | irrelevant | 0 | 0 | This is an in vitro/in vivo radioprotection drug-screening study; amifostine is only a comparator and no PK parameters (CL, V, half-life with volume, or PK model) for amifostine are reported. |
| popPK | Juan_2005 | irrelevant | 2 | 2 | Amifostine is only a co-administered cytoprotective agent; the PK parameters reported (AUC, Cmax, TPP) are for paclitaxel, not amifostine, and no amifostine disposition values appear. |
| popPK | Marzatico_2000 | irrelevant | 0 | 0 | In vitro antioxidant activity study with no PK disposition parameters for amifostine. |
| popPK | Mertsch_1998 | irrelevant | 0 | 0 | In-vitro mechanistic study of cytoprotection in bovine endothelial cells with no PK disposition parameters for amifostine. |
| popPK | Piraino_2025 | irrelevant | 0 | 0 | This is a drug-screening/tissue-chip study of radioprotectants; amifostine (WR-1065) is only a comparator and no PK parameters for it are reported. |
| popPK | Verma_2014 | irrelevant | 0 | 0 | The PK parameters reported are for DRDE-07, an amifostine analog, not for amifostine itself; amifostine is only mentioned as the parent scaffold. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamifostine%5D&body=Drug%3A%20amifostine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amifostine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
