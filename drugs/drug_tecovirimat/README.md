<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;tecovirimat&quot;}]"></div>

# tecovirimat

- **generic name:** tecovirimat
- **ATC codes:** `J05AX24`
- **DrugBank:** [DB12020](https://go.drugbank.com/drugs/DB12020) · **PubChem:** [CID 16124688](https://pubchem.ncbi.nlm.nih.gov/compound/16124688)
- **molar mass:** 376.335 g/mol (C19H15F3N2O3) — DrugBank
- **groups:** approved, investigational

## About

Tecovirimat is an antiviral medication used to treat orthopoxvirus infections such as smallpox and mpox. It is given orally as capsules or intravenously as an injection solution. The drug is authorised in the European Union and was the first antipoxviral approved in the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q7692792](https://www.wikidata.org/wiki/Q7692792), [Wikipedia](https://en.wikipedia.org/wiki/Tecovirimat?oldid=1371865003) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Luan_2025_EEV_inhibition](drugs/drug_tecovirimat/pd_Luan_2025_EEV_inhibition.md) | Inhibition of EEV production (VACV WR) ← tecovirimat (ST-246) · direct sigmoid Emax (Hill) effect | — | Luan J et al., AI-assisted identification of a novel, Biosafety and health (2025) | [10.1016/j.bsheal.2024.12.002](https://doi.org/10.1016/j.bsheal.2024.12.002) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 07:32 | 0:03 | 0/0/0 | 1/0/0 | 0/0/0 | 4,109/194 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Buchholz_2026 | irrelevant | 0 | 0 | The paper is a regulatory review discussing the approval framework for CBRN medical countermeasures using tecovirimat as a case study, but it does not report original quantitative PK parameters or extractable numeric values. |
| PGx | Buchholz_2026 | not_relevant | 0 | 0 | The paper is a regulatory review discussing approval pathways for CBRN countermeasures (including tecovirimat) and does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Chen_2026 | irrelevant | 1 | 1 | The paper reports bioavailability for a tecovirimat derivative (C12), not the parent drug, and does not provide quantitative population-pharmacokinetic parameters (CL, V, Q) for tecovirimat itself. |
| PGx | Chen_2026 | not_relevant | 0 | 0 | The paper describes the design of tecovirimat derivatives and their general PK properties in mice, but does not report the influence of human genetic variants on tecovirimat pharmacokinetics or pharmacodynamics. |
| popPK | Chen_2026_2 | irrelevant | 0 | 0 | This is a narrative review of mpox virology/immunology/vaccines with no PK parameters for tecovirimat. |
| popPK | Grosenbach_2019 | irrelevant | 0 | 0 | The paper describes in vitro antiviral screening methods (EC50/IC50) and lacks any pharmacokinetic disposition parameters for tecovirimat. |
| PGx | Grosenbach_2019 | not_relevant | 0 | 0 | The paper describes in vitro screening methods for antivirals and does not report any pharmacogenomic studies or genetic effects on tecovirimat PK/PD. |
| popPK | Higashi-Kuwata_2025 | irrelevant | 0 | 0 | In-vitro antiviral/cytotoxicity study of tecovirimat against MPXV in cell lines; no PK disposition parameters (CL, V, ka, half-life, PK model) reported. |
| popPK | Luan_2025 | irrelevant | 0 | 0 | In-vitro antiviral drug discovery study of JCS-2022; tecovirimat is only a comparator, with no PK parameters reported. |
| popPK | Russo_2020 | irrelevant | 0 | 0 | The study evaluates the effect of tecovirimat on vaccine immunogenicity and viral challenge efficacy in non-human primates, but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for tecovirimat. |
| PGx | Russo_2020 | not_relevant | 0 | 0 | The paper investigates the interaction between tecovirimat and the ACAM2000 vaccine in non-human primates, focusing on immunogenicity and efficacy against viral challenge, but contains no information on pharmacogenomic effects or specific PK/PD parameters of tecovirimat influenced by genetic variants. |
| popPK | Sudarmaji_2022 | irrelevant | 1 | 1 | Systematic review of monkeypox preclinical efficacy/vaccine studies; no PK disposition parameters (CL, V, ka, half-life) for tecovirimat, only sparse concentration/Tmax mentions without a PK model. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | This is an antiviral efficacy and mechanistic study (in vitro/in vivo) where tecovirimat is used as a comparator, with no pharmacokinetic parameters reported. |
| PGx | Xu_2026 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (Diphyllin and Tecovirimat) in an animal model, not a pharmacogenomic effect of a gene variant on tecovirimat's PK or PD. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | This is a drug-discovery study of brincidofovir/HPMPA prodrugs; tecovirimat is only mentioned as a comparator and no PK parameters for it are reported. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper focuses on the antiviral efficacy and mechanism of salinomycin, using tecovirimat only as a comparator drug for synergy testing, and contains no pharmacokinetic data. |
| PGx | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on the host-directed antiviral activity of salinomycin and its synergy with tecovirimat, but it does not report on any pharmacogenomic effects (gene variants, genotypes, or phenotypes) on the PK or PD parameters of tecovirimat. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btecovirimat%5D&body=Drug%3A%20tecovirimat%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tecovirimat/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
