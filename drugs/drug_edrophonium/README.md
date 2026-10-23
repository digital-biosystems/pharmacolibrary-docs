<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;edrophonium&quot;}]"></div>

# edrophonium

- **generic name:** edrophonium
- **ATC codes:** `V04CX07`
- **DrugBank:** [DB01010](https://go.drugbank.com/drugs/DB01010) · **PubChem:** [CID 3202](https://pubchem.ncbi.nlm.nih.gov/compound/3202)
- **molar mass:** 166.2401 g/mol (C10H16NO) — DrugBank
- **groups:** approved

## About

Edrophonium is a short-acting acetylcholinesterase inhibitor used as a diagnostic agent. It is classified under diagnostic agents in the ATC system and is approved, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3177745](https://www.wikidata.org/wiki/Q3177745) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Tanito_2001_3H_NMS_binding_M2](drugs/drug_edrophonium/pd_Tanito_2001_3H_NMS_binding_M2.md) | Specific [3H]N-methylscopolamine binding to guinea pig atrial M2 receptors ← edrophonium · inhibition effect | — | Tanito Y et al., Interaction of edrophonium with muscari…, Anesthesiology (2001) | [10.1097/00000542-200105000-00019](https://doi.org/10.1097/00000542-200105000-00019) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Tanito_2001_3H_NMS_binding_M3](drugs/drug_edrophonium/pd_Tanito_2001_3H_NMS_binding_M3.md) | Specific [3H]N-methylscopolamine binding to guinea pig submandibular gland M3 receptors ← edrophonium · inhibition effect | — | Tanito Y et al., Interaction of edrophonium with muscari…, Anesthesiology (2001) | [10.1097/00000542-200105000-00019](https://doi.org/10.1097/00000542-200105000-00019) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Unadkat_1986_twitch_tension_of_the_anterior_tibialis_muscle](drugs/drug_edrophonium/pd_Unadkat_1986_twitch_tension_of_the_anterior_tibialis_muscle.md) | twitch tension of the anterior tibialis muscle ← edrophonium · delayed effect through an effect compartment | — | Unadkat JD et al., An integrated model for the interaction…, Journal of applied physiolo… (1986) | [10.1152/jappl.1986.61.4.1593](https://doi.org/10.1152/jappl.1986.61.4.1593) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yamamoto_1996_HR](drugs/drug_edrophonium/pd_Yamamoto_1996_HR.md) | heart rate (bradycardiac response) ← edrophonium · delayed effect through an effect compartment | — | Yamamoto K et al., Toxicodynamic analysis of cardiac effec…, The Journal of pharmacy and… (1996) | [10.1111/j.2042-7158.1996.tb06006.x](https://doi.org/10.1111/j.2042-7158.1996.tb06006.x) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yamamoto_1996_HR_2](drugs/drug_edrophonium/pd_Yamamoto_1996_HR_2.md) | heart rate (tachycardiac response) ← edrophonium · delayed effect through an effect compartment | — | Yamamoto K et al., Toxicodynamic analysis of cardiac effec…, The Journal of pharmacy and… (1996) | [10.1111/j.2042-7158.1996.tb06006.x](https://doi.org/10.1111/j.2042-7158.1996.tb06006.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=edrophonium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:29 | 0:20 | 0/0/0 | 0/3/0 | 0/0/0 | 20,944/2,064 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Morris_1981.pdf` | Morris RB et al., Pharmacokinetics of edrophonium in anep…, British journal of anaesthe… (1981) | popPK | 8 | [10.1093/bja/53.12.1311](https://doi.org/10.1093/bja/53.12.1311) | [7032560](https://pubmed.ncbi.nlm.nih.gov/7032560) | Human PK study of edrophonium with clearance and half-life reported, but the abstract gives only relative changes, not the actual numeric parameter values. |
| `Hennis_1984.pdf` | Hennis PJ et al., Metabolites of neostigmine and pyridost…, Anesthesiology (1984) | popPK | 7 | [10.1097/00000542-198411000-00010](https://doi.org/10.1097/00000542-198411000-00010) | [6149707](https://pubmed.ncbi.nlm.nih.gov/6149707) | Edrophonium PK (three-compartment model, CL, Vdss, half-lives) was determined in dogs, but the abstract only summarizes values qualitatively without numeric parameter values. |
| `Unadkat_1986.pdf` | Unadkat JD et al., An integrated model for the interaction…, Journal of applied physiolo… (1986) | popPK | 6 | [10.1152/jappl.1986.61.4.1593](https://doi.org/10.1152/jappl.1986.61.4.1593) | [3781972](https://pubmed.ncbi.nlm.nih.gov/3781972) | Edrophonium arterial concentrations were measured in anesthetized dogs and modeled, but no numeric PK parameter values (CL, V, etc.) appear in the evidence. |

<sub>queue written 2026-10-07T21:29:27.598629+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Back_1974 | relevant | 9 | 4 | A compartmental PK study of [14C]-edrophonium in rats with model parameters (rate constants, half-lives, Vc) reported in Tables 1–2, but the table values are largely truncated/not readable in the evidence provided. |
| popPK | Baker_1986 | irrelevant | 0 | 0 | Edrophonium is only used as a co-administered cholinesterase inhibitor in a receptor-binding study; no PK parameters for it are reported. |
| popPK | Dreyer_1978 | irrelevant | 0 | 0 | Frog neuromuscular junction ionophoresis study; edrophonium is only an AChE inhibitor tool, no PK parameters. |
| popPK | Hennis_1984 | relevant | 7 | 3 | Edrophonium PK (three-compartment model, CL, Vdss, half-lives) was determined in dogs, but the abstract only summarizes values qualitatively without numeric parameter values. |
| popPK | Jaklitsch_1990 | irrelevant | 3 | 0 | A simulation study of neuromuscular blockade; edrophonium is one of many modeled agents and no numeric PK parameter values for edrophonium appear in the evidence. |
| popPK | Lenz_1984 | irrelevant | 0 | 0 | In-vitro enzyme kinetics study of AChE inhibition; edrophonium is only an inhibitor probe, no PK parameters. |
| popPK | Mills_1999 | irrelevant | 0 | 0 | The pharmacokinetic model and parameters (CL, V1) describe rapacuronium, not edrophonium, which is only used as a reversal agent. |
| popPK | Morris_1981 | relevant | 8 | 3 | Human PK study of edrophonium with clearance and half-life reported, but the abstract gives only relative changes, not the actual numeric parameter values. |
| popPK | Tanito_2001 | irrelevant | 0 | 0 | In vitro receptor pharmacology study of edrophonium's muscarinic antagonism; no pharmacokinetic disposition parameters. |
| popPK | Unadkat_1986 | relevant | 6 | 2 | Edrophonium arterial concentrations were measured in anesthetized dogs and modeled, but no numeric PK parameter values (CL, V, etc.) appear in the evidence. |
| popPK | Yamamoto_1996 | irrelevant | 2 | 1 | This is a toxicodynamic (PD) study in rats using an effect-compartment model for heart-rate effects, not a PK study reporting edrophonium disposition parameters; no numeric PK values are present. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
