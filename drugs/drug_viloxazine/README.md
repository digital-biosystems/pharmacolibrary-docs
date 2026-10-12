<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;viloxazine&quot;}]"></div>

# viloxazine

- **generic name:** viloxazine
- **ATC codes:** `N06AX09`
- **DrugBank:** [DB09185](https://go.drugbank.com/drugs/DB09185) · **PubChem:** [CID 5666](https://pubchem.ncbi.nlm.nih.gov/compound/5666)
- **molar mass:** 237.299 g/mol (C13H19NO3) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Viloxazine is a norepinephrine reuptake inhibitor that was originally used as an antidepressant and is now used to treat attention deficit hyperactivity disorder. It was withdrawn from use as an antidepressant in many countries but has been reapproved and is again available, mainly for ADHD.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q907148](https://www.wikidata.org/wiki/Q907148) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| 5-HVLX-gluc | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:04 | 0:56 | 0/1/0 | 1/0/0 | 0/0/1 | 98,516/4,776 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial 1/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nasser_2021_reference](drugs/drug_viloxazine/Viloxazine_Nasser2021_reference.md) | — | parent + metabolite (no model) | 0 | Nasser A et al., Population Pharmacokinetics of Viloxazi…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1940](https://doi.org/10.1002/jcph.1940) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span> | [Garcia-Olivares_2026_BPND_CP](drugs/drug_viloxazine/pd_Garcia_Olivares_2026_BPND_CP.md) | Choroid plexus [11C]CIMBI-36 BPND occupancy (5-HT2C) ← viloxazine · direct Emax (saturable) effect | — | Garcia-Olivares J et al., Viloxazine occupies the 5-HT2C receptor…, The international journal o… (2026) | [10.1093/ijnp/pyag034](https://doi.org/10.1093/ijnp/pyag034) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span> | [Garcia-Olivares_2026_BPND_FC](drugs/drug_viloxazine/pd_Garcia_Olivares_2026_BPND_FC.md) | Frontal cortex [11C]CIMBI-36 BPND occupancy (5-HT2A) ← viloxazine · direct Emax (saturable) effect | — | Garcia-Olivares J et al., Viloxazine occupies the 5-HT2C receptor…, The international journal o… (2026) | [10.1093/ijnp/pyag034](https://doi.org/10.1093/ijnp/pyag034) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP2D6** | `Q32` · Cmax | metabolism | [Wang_2024](drugs/drug_viloxazine/pgx_Wang_2024_CYP2D6_Q32.md) | Wang Z et al., Impact of Viloxazine Extended-Release C…, Clinical drug investigation (2024) | [10.1007/s40261-024-01356-0](https://doi.org/10.1007/s40261-024-01356-0) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=viloxazine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor/metabolism/substrate, `MAOA` inhibitor, `MAOB` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor, `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inhibitor, `CYP2D6` inhibitor/metabolism/substrate, `CYP3A4` inhibitor, `CYP3A5` inhibitor, `MAOA` inhibitor, `UGT1A9` substrate, `UGT2B15` substrate | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `CYP3A5` inhibitor, `MAOA` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1B (target), ADRB2 (target), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), HRH1 (target), HRH2 (target), HTR2B (target), HTR2C (target), SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schoretsanitis_2019.pdf` | Schoretsanitis G et al., Clinically Significant Drug-Drug Intera…, CNS drugs (2019) | pgx | 8 | [10.1007/s40263-019-00683-7](https://doi.org/10.1007/s40263-019-00683-7) | [31776871](https://www.ncbi.nlm.nih.gov/pubmed/31776871) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-07T19:03:33.776722+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Garcia-Olivares_2024 | irrelevant | 1 | 0 | This is a preclinical microdialysis study focusing on pharmacodynamic effects (neurotransmitter levels) in rats, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for viloxazine. |
| popPK | Garcia-Olivares_2026 | irrelevant | 0 | 0 | The study is a PET imaging investigation of receptor occupancy (pharmacodynamics), not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| PGx | Mansour_2026 | not_relevant | 0 | 0 | The paper is a narrative review discussing general pharmacology, PK, and efficacy, and does not report any gene variants or pharmacogenomic effects on viloxazine. |
| PGx | Schoretsanitis_2019 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions for ADHD agents and mentions viloxazine only as a subject of limited data regarding PK DDIs, with no information on pharmacogenomic effects. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper describes drug-drug pharmacokinetic interactions affecting theophylline, and viloxazine is mentioned only as a drug that decreases theophylline clearance, not as the primary subject of a pharmacogenomic study. |
| PGx | Wang_2021 | not_relevant | 0 | 1 | The study investigates drug-drug interactions between paroxetine and viloxazine, not pharmacogenomic (genetic) effects. |
| PGx | Williams_2023 | not_relevant | 2 | 0 | This is a general review article that mentions CYP metabolism qualitatively but does not report specific pharmacogenomic variants or quantitative genotype-phenotype associations for viloxazine. |
| PGx | Yu_2020 | not_relevant | 0 | 0 | The paper explicitly states that the CYP2D6 genotype difference (PM vs EM) results in a &lt;2-fold difference in metabolism, concluding it is not of clinical significance, and does not report a significant pharmacogenomic effect on PK parameters. |
| PGx | Yu_2022 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic drug-drug interaction (CYP1A2 inhibition) involving viloxazine, not a pharmacogenomic effect. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:03 UTC</sub>
