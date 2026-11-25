<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;fluspirilene&quot;}]"></div>

# fluspirilene

- **generic name:** fluspirilene
- **ATC codes:** `N05AG01`
- **DrugBank:** [DB04842](https://go.drugbank.com/drugs/DB04842) · **PubChem:** [CID 3396](https://pubchem.ncbi.nlm.nih.gov/compound/3396)
- **molar mass:** 475.5727 g/mol (C29H31F2N3O) — DrugBank
- **groups:** approved, withdrawn

## About

Fluspirilene is a diphenylbutylpiperidine antipsychotic used to treat schizophrenia. It is administered as an intramuscular injection. The drug is no longer in use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q408300](https://www.wikidata.org/wiki/Q408300), [Wikipedia](https://en.wikipedia.org/wiki/Fluspirilene?oldid=1382649870) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sah_1994_N_type](drugs/drug_fluspirilene/pd_Sah_1994_N_type.md) | N-type current ← fluspirilene · direct sigmoid Emax (Hill) effect | — | Sah DW et al., Inhibition of P-type and N-type calcium…, Molecular pharmacology (1994) | — |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sah_1994_P_type](drugs/drug_fluspirilene/pd_Sah_1994_P_type.md) | P-type current ← fluspirilene · direct sigmoid Emax (Hill) effect | — | Sah DW et al., Inhibition of P-type and N-type calcium…, Molecular pharmacology (1994) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 23:57 | 0:03 | 0/0/0 | 0/2/0 | 0/0/0 | 3,686/164 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dhaka_2025 | irrelevant | 0 | 0 | The paper studies the antiviral efficacy of fluspirilene in SARS-CoV-2 replication, not its pharmacokinetic parameters. |
| PGx | Dhaka_2025 | not_relevant | 0 | 0 | The study focuses on antiviral efficacy (EC50) of fluspirilene against SARS-CoV-2, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Grantham_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channel binding, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Grantham_1994 | not_relevant | 0 | 0 | The paper investigates the electrophysiological mechanism of fluspirilene (N-type calcium channel blockade) in cell lines; it does not report a pharmacogenomic effect (genotype influence) on any pharmacokinetic or pharmacodynamic parameter. |
| popPK | Kenny_1990 | irrelevant | 0 | 0 | The paper is a pharmacological study on calcium channel antagonism in tissue preparations and binding assays, reporting no pharmacokinetic parameters (CL, V, t1/2) for fluspirilene. |
| PGx | Kenny_1990 | not_relevant | 0 | 0 | The paper describes the pharmacological mechanism of action (calcium channel antagonism) of fluspirilene in isolated tissues, but contains no information regarding genetic variants or pharmacogenomics. |
| popPK | Sah_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic/mechanistic analysis of calcium channel inhibition, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Sah_1994 | not_relevant | 0 | 0 | The paper describes a direct physicochemical interaction between the drug and a protein (calcium channel) in a cell-free/cell-based assay, not a pharmacogenomic effect on a pharmacokinetic or pharmacodynamic parameter in a human or animal subject. |
| popPK | Sczekan_1996 | irrelevant | 0 | 0 | The study is an in vitro mechanistic assay measuring inhibition of IP3-induced calcium release, not a pharmacokinetic study of fluspirilene disposition. |
| PGx | Sczekan_1996 | not_relevant | 0 | 0 | The paper does not report any pharmacogenomic effect on PK or PD parameters of fluspirilene, but rather examines its mechanism of action in a brain microsome assay. |
| popPK | Vaidya_2025 | irrelevant | 0 | 0 | The paper is an in silico machine learning study for antiviral drug repurposing against EBV where fluspirilene is only mentioned as a compound with predicted binding affinity, not as the subject of a pharmacokinetic study. |
| PGx | Vaidya_2025 | not_relevant | 0 | 0 | The paper focuses on in silico prediction and docking of antiviral activity against EBV proteins, with no data on pharmacokinetics, pharmacodynamics, or pharmacogenomics of fluspirilene. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluspirilene%5D&body=Drug%3A%20fluspirilene%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fluspirilene/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
