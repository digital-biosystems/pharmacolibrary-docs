<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;edrophonium&quot;}]"></div>

# edrophonium

- **generic name:** edrophonium
- **ATC codes:** `V04CX07`
- **DrugBank:** [DB01010](https://go.drugbank.com/drugs/DB01010) · **PubChem:** [CID 3202](https://pubchem.ncbi.nlm.nih.gov/compound/3202)
- **molar mass:** 166.2401 g/mol (C10H16NO) — DrugBank
- **groups:** approved

## About

Edrophonium is a reversible acetylcholinesterase inhibitor used as a diagnostic agent. It is given by intravenous or intramuscular injection. The drug is approved for use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q3177745](https://www.wikidata.org/wiki/Q3177745), [Wikipedia](https://en.wikipedia.org/wiki/Edrophonium?oldid=1354489556) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yamamoto_1996_HR](drugs/drug_edrophonium/pd_Yamamoto_1996_HR.md) | heart rate ← edrophonium · delayed effect through an effect compartment | — | Yamamoto K et al., Toxicodynamic analysis of cardiac effec…, The Journal of pharmacy and… (1996) | [10.1111/j.2042-7158.1996.tb06006.x](https://doi.org/10.1111/j.2042-7158.1996.tb06006.x) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yamamoto_1996_HR_2](drugs/drug_edrophonium/pd_Yamamoto_1996_HR_2.md) | heart rate ← edrophonium · delayed effect through an effect compartment | — | Yamamoto K et al., Toxicodynamic analysis of cardiac effec…, The Journal of pharmacy and… (1996) | [10.1111/j.2042-7158.1996.tb06006.x](https://doi.org/10.1111/j.2042-7158.1996.tb06006.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:41 | 0:24 | 0/0/0 | 0/2/0 | 0/0/0 | 6,223/1,867 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Back_1974 | relevant | 10 | 3 | The paper presents a quantitative three-compartment PK model for edrophonium in rats, but specific numeric parameter values are contained in Table 2 which is not fully provided in the evidence. |
| popPK | Baker_1986 | irrelevant | 0 | 0 | The paper studies the binding of acetylethylcholine mustard to muscarinic receptors in vitro, and edrophonium is used only as a co-treatment agent in a mechanistic assay, not as a subject drug for PK analysis. |
| PGx | Baker_1986 | not_relevant | 0 | 0 | The paper studies the mechanism of acetylethylcholine mustard (Aech-M) binding to muscarinic receptors; edrophonium is only used as a co-treatment in one experimental arm, and there is no study of gene variants or genotypes affecting PK/PD. |
| popPK | Dreyer_1978 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of receptor conductance and dose-response curves in frogs, with edrophonium used only as an acetylcholinesterase inhibitor to modify local ACh concentration, rather than as the subject of a pharmacokinetic study. |
| PGx | Dreyer_1978 | not_relevant | 0 | 0 | The paper describes pharmacological mechanisms in frog neuromuscular junctions and does not investigate human genetic variants or pharmacogenomics. |
| popPK | Hennis_1984 | irrelevant | 3 | 0 | The study reports pharmacokinetic parameters for edrophonium in dogs, but they are absent from the provided abstract text (likely in the full text or tables not included), and edrophonium is studied alongside other agents in a comparative context. |
| PGx | Hennis_1984 | not_relevant | 0 | 0 | The study reports pharmacokinetic and pharmacodynamic parameters for edrophonium in dogs but does not investigate gene variants or genotypes (pharmacogenomics). |
| popPK | Jaklitsch_1990 | relevant | 5 | 0 | The study involves a compartmental simulation model for edrophonium (a reversal agent), implying quantitative PK parameters were used, but the specific numeric values (CL, V, etc.) are not present in the provided evidence. |
| PGx | Jaklitsch_1990 | not_relevant | 0 | 0 | The paper describes a general pharmacokinetic/pharmacodynamic simulation model for neuromuscular blocking agents and reversal agents, including edrophonium, but does not investigate or report any effects of genetic variants or genotypes on these parameters. |
| popPK | Lenz_1984 | irrelevant | 0 | 0 | The study focuses on in vitro kinetic properties of acetylcholinesterase from electric eel, not the pharmacokinetic disposition parameters of edrophonium. |
| PGx | Lenz_1984 | not_relevant | 0 | 0 | The study examines the kinetic properties of acetylcholinesterase in electric eels with edrophonium and does not report any human gene variants or genotypes affecting pharmacokinetic or pharmacodynamic parameters. |
| popPK | Mills_1999 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters (clearance, volume) for rapacuronium, while edrophonium is only used as an antagonist/probe drug without its own PK disposition parameters reported. |
| PGx | Mills_1999 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of rapacuronium and its antagonism by edrophonium in healthy subjects, but it does not report any association with gene variants or genotypes. |
| popPK | Morris_1981 | relevant | 10 | 2 | The study reports quantitative pharmacokinetic parameters for edrophonium, but specific numeric values for clearance and half-life are not provided in the evidence text, only relative changes (e.g., 67% decrease). |
| PGx | Morris_1981 | not_relevant | 0 | 0 | The paper examines edrophonium PK in the context of renal function, not genetic variants. |
| popPK | Tanito_2001 | irrelevant | 0 | 0 | This study characterizes receptor affinity (pA2, Ki, KD) in guinea pigs, not pharmacokinetic disposition parameters. |
| PGx | Tanito_2001 | not_relevant | 0 | 0 | The study investigates the interaction of edrophonium with muscarinic receptors in animal models, not the effect of a gene variant/genotype on edrophonium's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Unadkat_1986 | relevant | 5 | 2 | The study is a pharmacodynamic/pharmacokinetic model using edrophonium in dogs, but specific quantitative PK parameter values (CL, V) are not explicitly listed in the provided evidence. |
| PGx | Unadkat_1986 | not_relevant | 0 | 0 | The paper describes pharmacokinetic/pharmacodynamic modeling of drug interactions in dogs and does not report any pharmacogenomic effects of gene variants on edrophonium. |
| popPK | Yamamoto_1996 | irrelevant | 1 | 0 | The study focuses on toxicodynamics (cardiac effects/EC50) and pharmacodynamics rather than quantitative pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | Yamamoto_1996 | not_relevant | 0 | 0 | The study investigates toxicodynamics in rats and does not report any pharmacogenomic effects based on gene variants or genotypes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bedrophonium%5D&body=Drug%3A%20edrophonium%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_edrophonium/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
