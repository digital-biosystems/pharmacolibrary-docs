<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;tecovirimat&quot;}]"></div>

# tecovirimat

- **generic name:** tecovirimat
- **ATC codes:** `J05AX24`
- **DrugBank:** [DB12020](https://go.drugbank.com/drugs/DB12020) · **PubChem:** [CID 16124688](https://pubchem.ncbi.nlm.nih.gov/compound/16124688)
- **molar mass:** 376.335 g/mol (C19H15F3N2O3) — DrugBank
- **groups:** approved, investigational

## About

Tecovirimat is an antiviral medicine used to treat poxvirus infections, including smallpox, monkeypox, cowpox, and vaccinia. It is authorised in the European Union and also has approved and investigational status elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7692792](https://www.wikidata.org/wiki/Q7692792) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Luan_2025_EEV_inhibition](drugs/drug_tecovirimat/pd_Luan_2025_EEV_inhibition.md) | Inhibition of EEV production (VACV WR) ← tecovirimat (ST-246) · direct sigmoid Emax (Hill) effect | — | Luan J et al., AI-assisted identification of a novel, Biosafety and health (2025) | [10.1016/j.bsheal.2024.12.002](https://doi.org/10.1016/j.bsheal.2024.12.002) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tecovirimat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| distribution | testis | `ABCG2` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP2C19` inhibitor, `CYP2C8` inducer, `CYP3A4` inducer, `UGT1A1` substrate, `UGT1A3` substrate, `UGT1A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | `ABCG2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:24 | 0:39 | 0/0/0 | 1/0/0 | 0/0/0 | 102,495/1,274 | ollama / glm-5.3-flash | 7 | 0/7 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Buchholz_2026 | irrelevant | 3 | 1 | This is a regulatory review discussing tecovirimat as an example; no original quantitative PK parameter values are present in the evidence. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry/SAR study of tecovirimat derivatives (C12), not a PK study of tecovirimat itself; no disposition parameters for tecovirimat are reported. |
| popPK | Chen_2026_2 | irrelevant | 0 | 0 | This is a narrative review of mpox virology/immunology/vaccines with no PK parameters for tecovirimat. |
| popPK | Grosenbach_2019 | irrelevant | 0 | 0 | This is an in vitro antiviral screening methods paper with no PK parameters for tecovirimat. |
| popPK | Higashi-Kuwata_2025 | irrelevant | 0 | 0 | In-vitro antiviral/cytotoxicity study of tecovirimat against MPXV in cell lines; no PK disposition parameters (CL, V, ka, half-life, PK model) reported. |
| popPK | Luan_2025 | irrelevant | 0 | 0 | In-vitro antiviral drug discovery study of JCS-2022; tecovirimat is only a comparator, with no PK parameters reported. |
| popPK | Russo_2020 | irrelevant | 0 | 0 | This is an immunogenicity/efficacy study of ACAM2000 vaccine with tecovirimat co-administration in NHPs; no PK parameters (CL, V, ka, half-life, or PK model) for tecovirimat are reported. |
| popPK | Sudarmaji_2022 | irrelevant | 1 | 1 | Systematic review of monkeypox preclinical efficacy/vaccine studies; no PK disposition parameters (CL, V, ka, half-life) for tecovirimat, only sparse concentration/Tmax mentions without a PK model. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | This is an antiviral efficacy study of diphyllin with tecovirimat only as a co-administered comparator; no PK parameters (CL, V, ka, half-life, or PK model) for tecovirimat are reported. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | This is a drug-discovery study of brincidofovir/HPMPA prodrugs; tecovirimat is only mentioned as a comparator and no PK parameters for it are reported. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | Tecovirimat is only a co-administered comparator in an antiviral efficacy/synergy study; no PK parameters for tecovirimat are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btecovirimat%5D&body=Drug%3A%20tecovirimat%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tecovirimat/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
