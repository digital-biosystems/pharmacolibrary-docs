<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;amrinone&quot;}]"></div>

# amrinone

- **generic name:** amrinone
- **ATC codes:** `C01CE01`
- **DrugBank:** [DB01427](https://go.drugbank.com/drugs/DB01427) · **PubChem:** [CID 3698](https://pubchem.ncbi.nlm.nih.gov/compound/3698)
- **molar mass:** 187.198 g/mol (C10H9N3O) — DrugBank
- **groups:** approved, withdrawn

## About

Amrinone (inamrinone) is a phosphodiesterase inhibitor and cardiotonic that was used to treat congestive heart failure and dilated cardiomyopathy. It has been withdrawn, so it is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422724](https://www.wikidata.org/wiki/Q422724) and the WHO ATC classification; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| t½ | t1/2z | 3.6 | h | 3.6 hr | healthy males | 14 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Park_1983_reference](drugs/drug_amrinone/Amrinone_Park1983_reference.md) |
| F | Fab | 0.93 |  | 0.93 | healthy males | 14 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Park_1983_reference](drugs/drug_amrinone/Amrinone_Park1983_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Park_1983_reference](drugs/drug_amrinone/Amrinone_Park1983_reference.md) | — | 1-compartment (no model) | 3 | Park GB et al., Oral bioavailability and intravenous ph…, Journal of pharmaceutical s… (1983) | [10.1002/jps.2600720726](https://doi.org/10.1002/jps.2600720726) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span> | [Rump_1994_CF](drugs/drug_amrinone/pd_Rump_1994_CF.md) | coronary flow ← amrinone · direct Emax (saturable) effect | — | Rump AF et al., A quantitative comparison of functional…, British journal of pharmaco… (1994) | [10.1111/j.1476-5381.1994.tb13143.x](https://doi.org/10.1111/j.1476-5381.1994.tb13143.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span> | [Rump_1994_HR](drugs/drug_amrinone/pd_Rump_1994_HR.md) | heart-rate ← amrinone · direct Emax (saturable) effect | — | Rump AF et al., A quantitative comparison of functional…, British journal of pharmaco… (1994) | [10.1111/j.1476-5381.1994.tb13143.x](https://doi.org/10.1111/j.1476-5381.1994.tb13143.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span> | [Rump_1994_LVP](drugs/drug_amrinone/pd_Rump_1994_LVP.md) | left ventricular pressure ← amrinone · direct Emax (saturable) effect | — | Rump AF et al., A quantitative comparison of functional…, British journal of pharmaco… (1994) | [10.1111/j.1476-5381.1994.tb13143.x](https://doi.org/10.1111/j.1476-5381.1994.tb13143.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=amrinone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: PDE3A (inhibitor), PDE3B (inhibitor), PDE4A (inhibitor), TNF (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 04:03 | 1:37 | 1/0/0 | 1/0/0 | 0/0/0 | 62,730/2,059 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 3/0 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 25 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Park_1983.pdf` | Park GB et al., Oral bioavailability and intravenous ph…, Journal of pharmaceutical s… (1983) | popPK | 10 | [10.1002/jps.2600720726](https://doi.org/10.1002/jps.2600720726) | [6886991](https://pubmed.ncbi.nlm.nih.gov/6886991) | The study reports quantitative PK parameters (bioavailability, beta, half-life) for amrinone in humans, though specific clearance and volume values are not explicitly listed in the text. |
| `Hellinger_1995.pdf` | Hellinger A et al., Elimination of amrinone during continuo…, European journal of clinica… (1995) | popPK | 8 | [10.1007/BF00202173](https://doi.org/10.1007/BF00202173) | [7621849](https://pubmed.ncbi.nlm.nih.gov/7621849) | The study reports a two-compartment model and qualitative PK changes (AUC decrease, sieving coefficient) for amrinone in humans, but specific numeric values for clearance, volume, or half-life are not provided in the evidence. |
| `Goto_1992.pdf` | Goto Y et al., Effects of amrinone and isoproterenol o…, The American journal of phy… (1992) | pd | 4 | [10.1152/ajpheart.1992.262.3.H719](https://doi.org/10.1152/ajpheart.1992.262.3.H719) | [1558181](https://www.ncbi.nlm.nih.gov/pubmed/1558181) | metadata signals extractable PD data (Emax) |
| `Harada_1996.pdf` | Harada K et al., Influence of age on venodilator effect…, European journal of clinica… (1996) | pd | 4 | [10.1007/s002280050066](https://doi.org/10.1007/s002280050066) | [8739809](https://www.ncbi.nlm.nih.gov/pubmed/8739809) | metadata signals extractable PD data (Emax) |
| `Hayes_1984.pdf` | Hayes JS et al., Molecular basis for the cardiovascular…, The Journal of pharmacology… (1984) | pd | 4 |  | [6086873](https://www.ncbi.nlm.nih.gov/pubmed/6086873) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06 04:02 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bailey_1997 | not_relevant | 0 | 0 | The paper compares hemodynamic effects of amrinone and sodium nitroprusside in infants but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Brown_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of inotropic effects on cat papillary muscles and does not report pharmacokinetic parameters. |
| popPK | Davidenko_1984 | irrelevant | 0 | 0 | The study investigates the electrophysiologic effects of milrinone (an analogue) in canine tissue, not the pharmacokinetics of amrinone. |
| popPK | Davidenko_1985 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of milrinone (an analogue of amrinone) on isolated myocardial fibers and does not report pharmacokinetic parameters for amrinone. |
| popPK | Edelson_1986 | irrelevant | 2 | 0 | The study focuses on milrinone pharmacokinetics, with amrinone serving only as a qualitative comparator without specific quantitative parameter values provided in the text. |
| popPK | Goto_1992 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| popPK | Harada_1996 | irrelevant | 0 | 0 | no_text gate: only 68 chars of text extracted (&lt; 400) |
| PD | Harada_1996 | not_relevant | 0 | 0 | The provided text is only the title of a study and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Hayes_1984 | irrelevant | 0 | 0 | no_text gate: only 72 chars of text extracted (&lt; 400) |
| PD | Hayes_1984 | not_relevant | 0 | 0 | The paper focuses on the molecular basis and receptor binding of amrinone, not on pharmacodynamic exposure-response or dose-response modeling with numeric PD parameters. |
| popPK | Hellinger_1995 | relevant | 8 | 2 | The study reports a two-compartment model and qualitative PK changes (AUC decrease, sieving coefficient) for amrinone in humans, but specific numeric values for clearance, volume, or half-life are not provided in the evidence. |
| popPK | Kikura_2000 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of amrinone on platelet aggregation in vitro, not its pharmacokinetic disposition parameters. |
| popPK | Mansouri_2008 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assessment of inotropic effects in isolated rat atria and does not report any pharmacokinetic parameters (CL, V, t1/2) for amrinone. |
| popPK | Rezende_1994 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study characterizing alkaline phosphatase, where amrinone is used only as a competitive inhibitor to determine its Ki, not as a subject for pharmacokinetic analysis. |
| PD | Rezende_1994 | not_relevant | 0 | 0 | The paper investigates the enzymatic kinetics of alkaline phosphatase and mentions amrinone only as a reagent source, without reporting any pharmacodynamic or exposure-response data for the drug. |
| popPK | Rump_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of inotropic and anti-ischaemic effects in isolated rabbit hearts, reporting no pharmacokinetic parameters (CL, V, t1/2) for amrinone. |
| popPK | Shahid_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of amrinone's inotropic and chronotropic effects in isolated rabbit heart tissue, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Wallace_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilation mechanisms, not a pharmacokinetic study reporting disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamrinone%5D&body=Drug%3A%20amrinone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amrinone/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 04:03 UTC</sub>
