<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;vigabatrin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vigabatrin_Ounissi2019_reference&quot;,&quot;label&quot;:&quot;Ounissi_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vigabatrin/Vigabatrin_Ounissi2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# vigabatrin

- **generic name:** vigabatrin
- **ATC codes:** `N03AG04`
- **DrugBank:** [DB01080](https://go.drugbank.com/drugs/DB01080) · **PubChem:** [CID 5665](https://pubchem.ncbi.nlm.nih.gov/compound/5665)
- **molar mass:** 129.157 g/mol (C6H11NO2) — DrugBank
- **groups:** approved, investigational

## About

Vigabatrin is an antiepileptic drug used to treat epilepsy, including infantile spasms and partial seizures. It is authorised in the European Union, where its use is limited to these specific seizure types.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421663](https://www.wikidata.org/wiki/Q421663) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vigabatrin | parent | 129.157 | C6H11NO2 | DrugBank | [5665](https://pubchem.ncbi.nlm.nih.gov/compound/5665) | Nøhr_2015, Ounissi_2019 |

## Start here

> **Ounissi_2019_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> children with infantile spasms, n = The user requested a specific output format. The prompt contains a contradiction: the system prompt says 'Output ONLY flat YAML', but the 'OUTPUT FORMAT OVERRIDE' at the end says 'Return ONLY a JSON object matching the supplied schema'.. [Run it in the simulator](drugs/drug_vigabatrin/Vigabatrin_Ounissi2019_reference.md?tab=Simulation) · [record](drugs/drug_vigabatrin/Vigabatrin_Ounissi2019_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 2.36 | L/h | 2.36 L/h | children with infantile spasms | The user requested a specific output format. The prompt contains a contradiction: the system prompt says 'Output ONLY flat YAML', but the 'OUTPUT FORMAT OVERRIDE' at the end says 'Return ONLY a JSON object matching the supplied schema'. | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Ounissi_2019_reference](drugs/drug_vigabatrin/Vigabatrin_Ounissi2019_reference.md) |
| V | V | 17 | L | 17 L | children with infantile spasms | The user requested a specific output format. The prompt contains a contradiction: the system prompt says 'Output ONLY flat YAML', but the 'OUTPUT FORMAT OVERRIDE' at the end says 'Return ONLY a JSON object matching the supplied schema'. | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Ounissi_2019_reference](drugs/drug_vigabatrin/Vigabatrin_Ounissi2019_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Ounissi_2019_reference](drugs/drug_vigabatrin/Vigabatrin_Ounissi2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Ounissi M et al., Proposition of a Minimal Effective Dose…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1309](https://doi.org/10.1002/jcph.1309) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Nøhr_2015_reference](drugs/drug_vigabatrin/Vigabatrin_Nhr2015_reference.md) | — | 1-compartment (no model) | 3 | Nøhr MK et al., Is oral absorption of vigabatrin carrie…, European journal of pharmac… (2015) | [10.1016/j.ejps.2014.12.018](https://doi.org/10.1016/j.ejps.2014.12.018) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:01 | 0:50 | 0/1/1 | 0/0/0 | 0/0/0 | 35,914/2,148 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Molimard_2024.pdf` | Molimard A et al., Optimization of vigabatrin dosage in ch…, British journal of clinical… (2024) | popPK | 10 | [10.1111/bcp.16072](https://doi.org/10.1111/bcp.16072) | [38664899](https://pubmed.ncbi.nlm.nih.gov/38664899) | The paper describes a relevant population PK study, but the specific quantitative parameter values (CL, V, etc.) are not listed in the provided abstract/evidence, likely residing in the results section or figures not fully excerpted. |
| `Nielsen_2014.pdf` | Nielsen JC et al., Population pharmacokinetics analysis of…, Clinical pharmacokinetics (2014) | popPK | 10 | [10.1007/s40262-014-0172-z](https://doi.org/10.1007/s40262-014-0172-z) | [25172554](https://pubmed.ncbi.nlm.nih.gov/25172554) | The study reports a population PK model for vigabatrin with specific IIV percentages and covariate relationships, but the central numeric parameter estimates (e.g., median CL, V, ka) are not provided in the extracted text. |
| `Nøhr_2015.pdf` | Nøhr MK et al., Is oral absorption of vigabatrin carrie…, European journal of pharmac… (2015) | popPK | 10 | [10.1016/j.ejps.2014.12.018](https://doi.org/10.1016/j.ejps.2014.12.018) | [25562534](https://pubmed.ncbi.nlm.nih.gov/25562534) | The study reports a population PK model for vigabatrin in rats with specific quantitative parameters (Km, Vmax, bioavailability) provided in the text. |
| `Ounissi_2019.pdf` | Ounissi M et al., Proposition of a Minimal Effective Dose…, Journal of clinical pharmac… (2019) | popPK | 10 | [10.1002/jcph.1309](https://doi.org/10.1002/jcph.1309) | [30192381](https://pubmed.ncbi.nlm.nih.gov/30192381) | The abstract provides explicit numeric values for population PK parameters (clearance, volume, absorption duration) for vigabatrin. |
| `Zheng_2025.pdf` | Zheng Q et al., Effects of melatonin on the pharmacokin…, Toxicology and applied phar… (2025) | popPK | 10 | [10.1016/j.taap.2025.117247](https://doi.org/10.1016/j.taap.2025.117247) | [39884559](https://pubmed.ncbi.nlm.nih.gov/39884559) | Study reports quantitative PK parameters for vigabatrin in rats, but specific numeric values are not listed in the provided abstract evidence. |
| `Yu_1994.pdf` | Yu DK et al., A comparison of population and standard…, Biopharmaceutics & drug dis… (1994) | popPK | 9 | [10.1002/bdd.2510150605](https://doi.org/10.1002/bdd.2510150605) | [7993985](https://pubmed.ncbi.nlm.nih.gov/7993985) | The paper describes a population PK study of vigabatrin in humans, but the abstract only summarizes qualitative findings and trends without providing specific numeric parameter values. |

<sub>queue written 2026-10-07T08:01:03.443191+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheng_2006 | irrelevant | 0 | 0 | This is an in-vitro mechanistic electrophysiology study using vigabatrin only as a positive control, containing no pharmacokinetic parameters. |
| popPK | Liu_2026 | irrelevant | 2 | 0 | This is a simulation study using literature-derived PK models for 14 antiseizure medications; it does not report original quantitative disposition parameters for vigabatrin, and the specific numeric values are located in supplementary tables not provided in the evidence. |
| popPK | Molimard_2024 | relevant | 10 | 3 | The paper describes a relevant population PK study, but the specific quantitative parameter values (CL, V, etc.) are not listed in the provided abstract/evidence, likely residing in the results section or figures not fully excerpted. |
| popPK | Nielsen_2014 | relevant | 10 | 3 | The study reports a population PK model for vigabatrin with specific IIV percentages and covariate relationships, but the central numeric parameter estimates (e.g., median CL, V, ka) are not provided in the extracted text. |
| popPK | Perucca_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rufinamide, with vigabatrin mentioned only as a comedication that affects rufinamide concentrations, not as the subject drug. |
| popPK | Steinborn_2005 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of carbamazepine, using vigabatrin only as a co-administered comparator to assess interaction effects, and does not report quantitative PK parameters for vigabatrin itself. |
| popPK | Wang_2011 | irrelevant | 0 | 0 | This is a mechanistic electrophysiology study on a novel compound, and vigabatrin is used only as a tool compound/comparator, with no pharmacokinetic parameters reported. |
| popPK | Yu_1994 | relevant | 9 | 2 | The paper describes a population PK study of vigabatrin in humans, but the abstract only summarizes qualitative findings and trends without providing specific numeric parameter values. |
| popPK | Zheng_2025 | relevant | 10 | 2 | Study reports quantitative PK parameters for vigabatrin in rats, but specific numeric values are not listed in the provided abstract evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 08:01 UTC</sub>
