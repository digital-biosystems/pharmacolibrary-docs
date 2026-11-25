<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;clomethiazole&quot;}]"></div>

# clomethiazole

- **generic name:** clomethiazole
- **ATC codes:** `N05CM02`
- **DrugBank:** [DB06470](https://go.drugbank.com/drugs/DB06470) · **PubChem:** [CID 10783](https://pubchem.ncbi.nlm.nih.gov/compound/10783)
- **molar mass:** 161.65 g/mol (C6H8ClNS) — DrugBank
- **groups:** investigational

## About

Clomethiazole is a sedative and hypnotic used for alcohol withdrawal, anxiety, and Parkinson's disease. It is administered as a capsule or syrup.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q417178](https://www.wikidata.org/wiki/Q417178), [Wikipedia](https://en.wikipedia.org/wiki/Clomethiazole?oldid=1353665186) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clomethiazole | parent | 161.65 | C6H8ClNS | DrugBank | [10783](https://pubchem.ncbi.nlm.nih.gov/compound/10783) | Jostell_1978 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Jostell_1978_reference](drugs/drug_clomethiazole/Clomethiazole_Jostell1978_reference.md) | — | 1-compartment (no model) | 1 | Jostell KG et al., Pharmacokinetics of clomethiazole in he…, Acta pharmacologica et toxi… (1978) | [10.1111/j.1600-0773.1978.tb02253.x](https://doi.org/10.1111/j.1600-0773.1978.tb02253.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Zingmark_2003_reference](drugs/drug_clomethiazole/Clomethiazole_Zingmark2003_reference.md) | — | 1-compartment (no model) | 0 | Zingmark PH et al., Population pharmacokinetics of clomethi…, British journal of clinical… (2003) | [10.1046/j.0306-5251.2003.01850.x](https://doi.org/10.1046/j.0306-5251.2003.01850.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Visser_2006_body_temperature](drugs/drug_clomethiazole/pd_Visser_2006_body_temperature.md) | body temperature ← clomethiazole · disease-progression model | — | Visser SA et al., Modeling drug- and system-related chang…, The Journal of pharmacology… (2006) | [10.1124/jpet.105.095224](https://doi.org/10.1124/jpet.105.095224) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:43 | 0:36 | 1/1/0 | 1/0/0 | 0/0/0 | 10,022/5,174 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zingmark_2003.pdf` | Zingmark PH et al., Population pharmacokinetics of clomethi…, British journal of clinical… (2003) | popPK | 10 | [10.1046/j.0306-5251.2003.01850.x](https://doi.org/10.1046/j.0306-5251.2003.01850.x) | [12895190](https://pubmed.ncbi.nlm.nih.gov/12895190) | The abstract explicitly reports quantitative population pharmacokinetic parameters (CL, V1, Q, V2) and their variability for clomethiazole in acute stroke patients. |

<sub>queue written 2026-11-23 20:43 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arslan_2026 | irrelevant | 0 | 0 | The paper reports on the detection of clomethiazole in a counterfeit herbal product and provides in silico ADME predictions, but contains no original pharmacokinetic studies or quantitative disposition parameters for clomethiazole. |
| PGx | Arslan_2026 | not_relevant | 0 | 0 | The paper reports the detection of undeclared drugs in a counterfeit product and in silico risk assessment, containing no data on gene variants or pharmacogenomic effects on PK/PD. |
| popPK | Dinger_2014 | irrelevant | 0 | 0 | Clomethiazole is used as a selective inhibitor in an in vitro CYP inhibition assay, not as a subject drug for PK parameter estimation. |
| PGx | Dinger_2014 | not_relevant | 0 | 0 | The paper uses clomethiazole only as a selective inhibitor for CYP2E1 in an assay development study and does not report any genetic variants affecting its pharmacokinetics or pharmacodynamics. |
| popPK | Jiang_2018 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of clomethiazole's derivative (NMZM) focusing on GABA receptor binding and LTP, reporting no pharmacokinetic parameters. |
| PGx | Jiang_2018 | not_relevant | 0 | 0 | The paper reports pharmacological mechanisms of action for a clomethiazole derivative (NMZM) but does not investigate any genetic variants or genotypes affecting pharmacokinetics or pharmacodynamics. |
| PGx | Jostell_1978 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of clomethiazole in healthy adults but does not report any gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Kamel_2023 | irrelevant | 0 | 0 | The paper focuses on in vitro mechanistic modeling of metabolite formation and P450 binding, reporting no quantitative pharmacokinetic parameters (CL, V, t1/2) for clomethiazole. |
| PGx | Kamel_2023 | not_relevant | 0 | 0 | The paper describes in silico mechanisms of clomethiazole biotransformation and P450 inactivation, but does not report any gene variant or genotype affecting pharmacokinetic or pharmacodynamic parameters. |
| popPK | Nelson_2002 | irrelevant | 0 | 0 | This is an in-vitro electrophysiological study of receptor binding, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Nelson_2002 | not_relevant | 0 | 0 | The paper studies the electrophysiological mechanism of clomethiazole on recombinant GABA(A) receptors but does not report any pharmacogenomic effects (gene variants influencing PK/PD). |
| popPK | Stresser_2016 | irrelevant | 1 | 0 | The study investigates clomethiazole's pharmacodynamic inhibition of CYP2E1 (IC50, KI, kinact) rather than its pharmacokinetic disposition parameters (CL, V, t1/2). |
| PGx | Stresser_2016 | not_relevant | 0 | 0 | The paper reports on the mechanism of enzyme inhibition by clomethiazole in pooled human microsomes, but does not investigate the impact of specific genetic variants (polymorphisms) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Tsuei_1980 | relevant | 8 | 2 | The paper discusses the pharmacokinetics of clomethiazole and proposes infusion regimens, but no specific numeric parameter values (CL, V, t1/2) are present in the provided abstract/text. |
| PGx | Tsuei_1980 | not_relevant | 0 | 0 | The paper discusses a general method for designing infusion regimens for clomethiazole but does not report any pharmacogenomic effects or gene-variant specific data. |
| popPK | Visser_2006 | irrelevant | 5 | 0 | The study reports pharmacodynamic parameters (potency, tolerance kinetics) and PK inputs, but specific quantitative disposition values (CL, V) are not present in the provided text. |
| PGx | Visser_2006 | not_relevant | 0 | 0 | The paper reports PK/PD modeling in rats but does not investigate the influence of gene variants, genotypes, or genotypes on these parameters. |
| PGx | Zingmark_2003 | not_relevant | 0 | 0 | The paper investigates standard population pharmacokinetics/covariates (e.g., weight, age) but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclomethiazole%5D&body=Drug%3A%20clomethiazole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clomethiazole/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 20:43 UTC</sub>
