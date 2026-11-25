<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;levosulpiride&quot;}]"></div>

# levosulpiride

- **generic name:** levosulpiride
- **ATC codes:** `N05AL07`
- **DrugBank:** [DB16021](https://go.drugbank.com/drugs/DB16021) · **PubChem:** none
- **molar mass:** 341.43 g/mol (C15H23N3O4S) — DrugBank
- **groups:** investigational

## About

Levosulpiride is a benzamide antipsychotic used to treat schizophrenia, major depressive disorder, and indigestion. It is taken by mouth and can also be given parenterally.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q1452256](https://www.wikidata.org/wiki/Q1452256), [Wikipedia](https://en.wikipedia.org/wiki/Levosulpiride?oldid=1338852650) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 00:42 | 0:04 | 0/0/0 | 0/0/0 | 0/0/0 | 4,696/194 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ackerman_1984.pdf` | Ackerman DM et al., Pharmacological characterization of dop…, Archives internationales de… (1984) | pd | 4 |  | [6712357](https://www.ncbi.nlm.nih.gov/pubmed/6712357) | metadata signals extractable PD data (EC50) |
| `Bowery_1994.pdf` | Bowery B et al., Comparison between the pharmacology of…, British journal of pharmaco… (1994) | pd | 4 | [10.1111/j.1476-5381.1994.tb13161.x](https://doi.org/10.1111/j.1476-5381.1994.tb13161.x) | [7921615](https://www.ncbi.nlm.nih.gov/pubmed/7921615) | metadata signals extractable PD data (EC50) |
| `Peris_1988.pdf` | Peris J et al., Biphasic modulation of evoked [3H]D-asp…, Synapse (New York, N.Y.) (1988) | pd | 4 | [10.1002/syn.890020413](https://doi.org/10.1002/syn.890020413) | [2973144](https://www.ncbi.nlm.nih.gov/pubmed/2973144) | metadata signals extractable PD data (EC50) |
| `Cho_2010.pdf` | Cho HY et al., Influence of ABCB1 genetic polymorphism…, Neuroscience (2010) | pgx | 8 | [10.1016/j.neuroscience.2010.04.065](https://doi.org/10.1016/j.neuroscience.2010.04.065) | [20438811](https://www.ncbi.nlm.nih.gov/pubmed/20438811) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |

<sub>queue written 2026-11-24 00:42 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ackerman_1984 | irrelevant | 0 | 0 | The paper studies dopamine-4-O-sulfate, not levosulpiride, and does not report any PK parameters for levosulpiride. |
| PGx | Ackerman_1984 | not_relevant | 0 | 0 | The paper investigates the pharmacological activity of a dopamine metabolite (DA-4-S) and its interaction with sulpiride, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD parameters of levosulpiride. |
| popPK | Bowery_1994 | irrelevant | 0 | 0 | no_text gate: only 187 chars of text extracted (&lt; 400) |
| PGx | Bowery_1994 | not_relevant | 0 | 0 | The paper studies dopamine receptor pharmacology in rat brain slices and does not mention levosulpiride or pharmacogenomics. |
| popPK | Cho_2004 | irrelevant | 2 | 0 | This is a bioequivalence study reporting non-compartmental parameters (AUC, Cmax) and ratios, but it does not provide the absolute quantitative disposition parameters (CL/F, V/F, ka, or t1/2 values) required for population PK modeling. |
| PGx | Cho_2004 | not_relevant | 0 | 0 | The paper is a bioequivalence study comparing two formulations in healthy volunteers and does not investigate gene variants or pharmacogenomic effects. |
| popPK | Cho_2010 | relevant | 4 | 3 | Study reports AUC and Cmax for levosulpiride in humans and mice, but lacks primary disposition parameters (CL, V, ka) and full numeric values in the provided text. |
| popPK | Gallagher_1985 | irrelevant | 0 | 0 | The study describes a different compound (SK&F 101468) and does not report pharmacokinetic parameters for levosulpiride. |
| PGx | Gallagher_1985 | not_relevant | 0 | 0 | The paper describes the synthesis and pharmacological characterization of a dopamine receptor agonist (SK&F 101468) and its interaction with sulpiride, but does not report any pharmacogenomic effects on levosulpiride PK or PD. |
| popPK | Gomes_2003 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology paper in opossum kidney cells using sulpiride as a receptor antagonist, not a pharmacokinetic study of levosulpiride. |
| PGx | Gomes_2003 | not_relevant | 0 | 0 | The study investigates basic ion channel pharmacology in cell lines and does not report pharmacogenomic effects on the PK/PD of levosulpiride in humans. |
| popPK | Hayashi_1999 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of neuroleptic effects on intracellular calcium in rat neurons, not a pharmacokinetic study of levosulpiride. |
| PGx | Hayashi_1999 | not_relevant | 0 | 0 | The paper examines the cellular pharmacodynamics of sulpiride in rat cortical neurons but does not investigate the effect of human gene variants on drug pharmacokinetics or pharmacodynamics. |
| popPK | Peris_1988 | irrelevant | 0 | 0 | The paper is an in-vitro neuropharmacological study on dopamine receptors and glutamate release in rat brain slices, not a pharmacokinetic study of levosulpiride. |
| PGx | Peris_1988 | not_relevant | 0 | 0 | The paper studies receptor pharmacology in rat slices and contains no data on human genotypes, pharmacokinetics, or pharmacodynamics of levosulpiride. |
| popPK | Rump_1995 | irrelevant | 0 | 0 | The study investigates receptor pharmacology in human atrial tissue using S-sulpiride as a tool compound, not the pharmacokinetics of levosulpiride. |
| PGx | Rump_1995 | not_relevant | 0 | 0 | The study investigates receptor-mediated neurotransmission and does not report any pharmacogenomic effect of a gene variant on a PK/PD parameter of levosulpiride. |
| popPK | Tonini_1999 | irrelevant | 0 | 0 | The paper is a review focused on cardiac safety mechanisms and does not report any quantitative pharmacokinetic parameters for levosulpiride. |
| PGx | Tonini_1999 | not_relevant | 0 | 0 | The text discusses cardiac side effects and CYP3A4 drug interactions for cisapride and levosulpiride, but does not report any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Vieira-Coelho_2001 | irrelevant | 0 | 0 | The study is an in-vitro/mechanistic investigation of dopamine's effect on sodium transport and ATPase activity, using sulpiride only as a pharmacological probe to rule out D2 receptor involvement, with no pharmacokinetic parameters reported. |
| PGx | Vieira-Coelho_2001 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of dopamine on sodium transport and Na+,K+-ATPase activity, not the pharmacokinetic or pharmacodynamic parameters of levosulpiride. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevosulpiride%5D&body=Drug%3A%20levosulpiride%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_levosulpiride/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
