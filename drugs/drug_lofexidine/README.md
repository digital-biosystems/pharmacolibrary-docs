<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;lofexidine&quot;}]"></div>

# lofexidine

- **generic name:** lofexidine
- **ATC codes:** `N07BC04`
- **DrugBank:** [DB04948](https://go.drugbank.com/drugs/DB04948) · **PubChem:** [CID 30668](https://pubchem.ncbi.nlm.nih.gov/compound/30668)
- **molar mass:** 259.132 g/mol (C11H12Cl2N2O) — DrugBank
- **groups:** approved, investigational

## About

Lofexidine is a medicine used to treat opioid dependence, helping people going through opioid withdrawal. It is an approved drug, mainly used in the United States for this purpose.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3836403](https://www.wikidata.org/wiki/Q3836403) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fragola_2023_cAMP](drugs/drug_lofexidine/pd_Fragola_2023_cAMP.md) | cAMP formation (α2AR), normalized to lofexidine maximum ← lofexidine · direct Emax (saturable) effect | — | Fragola NR et al., Conformationally Selective 2-Aminotetra…, ACS chemical neuroscience (2023) | [10.1021/acschemneuro.3c00148](https://doi.org/10.1021/acschemneuro.3c00148) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fragola_2023_cAMP_2](drugs/drug_lofexidine/pd_Fragola_2023_cAMP_2.md) | cAMP formation (α2CR), normalized to lofexidine maximum ← lofexidine · direct Emax (saturable) effect | — | Fragola NR et al., Conformationally Selective 2-Aminotetra…, ACS chemical neuroscience (2023) | [10.1021/acschemneuro.3c00148](https://doi.org/10.1021/acschemneuro.3c00148) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yocca_2025_GTP_S_2A](drugs/drug_lofexidine/pd_Yocca_2025_GTP_S_2A.md) | [35S]GTPγS binding stimulation at human α2A adrenoceptor ← lofexidine · direct sigmoid Emax (Hill) effect | — | Yocca FD et al., Dexmedetomidine potently and reversibly…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1589075](https://doi.org/10.3389/fphar.2025.1589075) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yocca_2025_GTP_S_2B](drugs/drug_lofexidine/pd_Yocca_2025_GTP_S_2B.md) | [35S]GTPγS binding stimulation at human α2B adrenoceptor ← lofexidine · direct sigmoid Emax (Hill) effect | — | Yocca FD et al., Dexmedetomidine potently and reversibly…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1589075](https://doi.org/10.3389/fphar.2025.1589075) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yocca_2025_GTP_S_2C](drugs/drug_lofexidine/pd_Yocca_2025_GTP_S_2C.md) | [35S]GTPγS binding stimulation at human α2C adrenoceptor ← lofexidine · direct sigmoid Emax (Hill) effect | — | Yocca FD et al., Dexmedetomidine potently and reversibly…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1589075](https://doi.org/10.3389/fphar.2025.1589075) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lofexidine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2D6` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABCB5 (inhibitor), ADRA1A (target), ADRA2A (target), HTR1A (target), HTR1D (target), HTR2C (target), HTR7 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:32 | 0:24 | 0/0/0 | 2/0/0 | 0/0/0 | 54,176/1,745 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fragola_2023 | irrelevant | 0 | 0 | This is a medicinal chemistry/receptor pharmacology study using lofexidine only as a reference ligand; no PK parameters for lofexidine are reported. |
| popPK | Jin_1989 | irrelevant | 0 | 0 | In-vitro pharmacology study of adenylate cyclase inhibition; lofexidine is only a test agonist, no PK parameters. |
| popPK | Sadek_2024 | irrelevant | 0 | 0 | Behavioral study of lofexidine as co-administered drug in rats; no PK parameters reported. |
| popPK | Summers_1980 | irrelevant | 0 | 0 | In-vitro receptor binding study in rat brain membranes; lofexidine is only a comparator displacer, no PK parameters. |
| popPK | Yocca_2025 | irrelevant | 0 | 0 | Lofexidine is only an in vitro comparator for α2-AR potency; the PK data (AUC, brain levels) concern dexmedetomidine, not lofexidine, and no lofexidine disposition parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blofexidine%5D&body=Drug%3A%20lofexidine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lofexidine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
