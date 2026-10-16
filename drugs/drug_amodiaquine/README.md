<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;amodiaquine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amodiaquine_Ding2024_nonmem_estimates_rse_a&quot;,&quot;label&quot;:&quot;Ding_2024_nonmem_estimates_rse_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amodiaquine/Amodiaquine_Ding2024_nonmem_estimates_rse_a.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# amodiaquine

- **generic name:** amodiaquine
- **ATC codes:** `P01BA06`, `P01BF03`
- **DrugBank:** [DB00613](https://go.drugbank.com/drugs/DB00613) · **PubChem:** [CID 2165](https://pubchem.ncbi.nlm.nih.gov/compound/2165)
- **molar mass:** 355.861 g/mol (C20H22ClN3O) — DrugBank
- **groups:** approved, investigational

## About

Amodiaquine is an antimalarial medicine used to treat malaria. It is on the WHO list of essential medicines and is also available in combination with artemisinin derivatives; it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q239569](https://www.wikidata.org/wiki/Q239569) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| amodiaquine | parent | 355.861 | C20H22ClN3O | DrugBank | [2165](https://pubchem.ncbi.nlm.nih.gov/compound/2165) | Ali_2018, Ding_2020, Ding_2024, Stepniewska_2009 |
| amodiaquine, desethylamodiaquine (desethylamodiaquine) | metabolite | 327.812 | C18H18ClN3O | PubChem | [122068](https://pubchem.ncbi.nlm.nih.gov/compound/122068) | Ding_2020, Ding_2024, Stepniewska_2009 |
| dihydroartemisinin | metabolite | 284.9 | — | the paper | — | Stepniewska_2009 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 17:59 | 10:16 | 0/2/3 | 2/0/1 | 0/0/0 | 427,241/65,085 | einfracz / qwen3.8-27b | 13 | 0/13 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q351 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Ali_2018_reference](drugs/drug_amodiaquine/Amodiaquine_Ali2018_reference.md) | — | parent + metabolite (no model) | 1 | Ali AM et al., Population Pharmacokinetics of the Anti…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.02193-17](https://doi.org/10.1128/AAC.02193-17) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.696). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Ding_2024_nonmem_population_estimates_rse_a](drugs/drug_amodiaquine/Amodiaquine_Ding2024_nonmem_population_estimates_rse_a.md) | held back | 1-compartment, oral | 10 | Ding J et al., Population pharmacokinetics of amodiaqu…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13211](https://doi.org/10.1002/psp4.13211) |
| <span class="pk-badge pk-badge--neutral">not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Stepniewska_2009_reference](drugs/drug_amodiaquine/Amodiaquine_Stepniewska2009_reference.md) | model (no simulator) | 2-compartment general linear | 8 (+2 cov.) | Stepniewska K et al., Population pharmacokinetics of artesuna…, Malaria journal (2009) | [10.1186/1475-2875-8-200](https://doi.org/10.1186/1475-2875-8-200) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.483). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Ding_2020_reference](drugs/drug_amodiaquine/Amodiaquine_Ding2020_reference.md) | — | 1-compartment (no model) | 16 | Ding J et al., Adherence and Population Pharmacokineti…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1707](https://doi.org/10.1002/cpt.1707) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.37). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `engineer`</sub> | [Ding_2024_nonmem_estimates_rse_a](drugs/drug_amodiaquine/Amodiaquine_Ding2024_nonmem_estimates_rse_a.md) | ▶ model + simulator | 1-compartment, oral | 12 | Ding J et al., Population pharmacokinetics of amodiaqu…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13211](https://doi.org/10.1002/psp4.13211) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gendrot_2020_EC50](drugs/drug_amodiaquine/pd_Gendrot_2020_EC50.md) | SARS-CoV-2 replication ← desethylamodiaquine · direct sigmoid Emax (Hill) effect | — | Gendrot M et al., Antimalarial drugs inhibit the replicat…, Travel medicine and infecti… (2020) | [10.1016/j.tmaid.2020.101873](https://doi.org/10.1016/j.tmaid.2020.101873) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gerstner_2003_IC50](drugs/drug_amodiaquine/pd_Gerstner_2003_IC50.md) | inhibition of schizont maturation ← amodiaquine · direct sigmoid Emax (Hill) effect | — | Gerstner U et al., Comparison of the in-vitro activity of…, Wiener klinische Wochenschr… (2003) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Tarning_2012_recurrent_malaria_infections](drugs/drug_amodiaquine/pd_Tarning_2012_recurrent_malaria_infections.md) | recurrent malaria infections ← desethylamodiaquine · time-to-event model | — | Tarning J et al., Population pharmacokinetic and pharmaco…, Antimicrobial agents and ch… (2012) | [10.1128/AAC.01242-12](https://doi.org/10.1128/AAC.01242-12) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=amodiaquine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2C9` inhibitor, `CYP2D6` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate, `CYP1B1` substrate | DrugBank actor |
| metabolism | skin | `CYP1B1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HNMT (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 52 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 0  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tarning_2012.pdf` | Tarning J et al., Population pharmacokinetic and pharmaco…, Antimicrobial agents and ch… (2012) | popPK | 10 | [10.1128/AAC.01242-12](https://doi.org/10.1128/AAC.01242-12) | [22926572](https://pubmed.ncbi.nlm.nih.gov/22926572) | The paper describes a population PK model for amodiaquine and its metabolite in humans, but the specific numeric parameter estimates (CL, V, etc.) are not provided in the evidence text, likely residing in the results/tables not included here. |

<sub>queue written 2026-10-14T17:50:34.546846+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abla_2024 | relevant | 5 | 3 | This is a PBPK simulation study that models amodiaquine's disposition but does not report primary disposition parameters (CL, V, ka); it only provides simulated tissue concentrations and partition ratios. |
| popPK | Baba_2023 | irrelevant | 1 | 0 | The study focuses on the antiviral activity of amodiaquine derivatives against SFTSV and reports only qualitative PK issues (poor bioavailability) for a derivative, not quantitative PK parameters for amodiaquine itself. |
| popPK | Bocci_2020 | irrelevant | 0 | 0 | The study focuses on in-vitro antiviral screening and mechanistic discussion, not on pharmacokinetic disposition parameters like clearance or volume for amodiaquine. |
| popPK | Boonyasuppayakorn_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study investigating amodiaquine's antiviral activity against dengue virus, containing no pharmacokinetic disposition parameters. |
| popPK | Chan_2023 | relevant | 4 | 2 | The paper describes a population PK model for amodiaquine, but the specific quantitative parameter estimates (CL, V, etc.) are located in Supplementary Table S1 which is not provided in the evidence. |
| popPK | Ding_2026 | relevant | 10 | 2 | This is a population PK study for amodiaquine in humans, but the specific numeric parameter estimates (CL, V, etc.) are not present in the provided text, appearing only in a referenced Table 4. |
| popPK | Gendrot_2020 | irrelevant | 2 | 0 | The paper is an in-vitro antiviral study for SARS-CoV-2; amodiaquine (via its metabolite DEAM) is a test subject, not the subject of a pharmacokinetic study, and no PK parameters (CL, V, etc.) are reported for amodiaquine in the evidence. |
| popPK | Gerstner_2003 | irrelevant | 0 | 0 | The paper describes an in-vitro assay measuring antimalarial activity (EC50/EC90) rather than reporting pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Han_2018 | irrelevant | 0 | 0 | The study reports only in-vitro antiviral activity (EC50) of amodiaquine against Zika virus and contains no pharmacokinetic or disposition parameters. |
| popPK | Kawuma_2021 | irrelevant | 1 | 0 | The study models the pharmacokinetics of dolutegravir, with amodiaquine serving only as a co-administered comparator drug without reporting its own disposition parameters. |
| popPK | Kazakova_2024 | irrelevant | 0 | 0 | The study is a mechanistic antiviral assay where amodiaquine serves only as a positive control for potency, with no pharmacokinetic parameters reported. |
| popPK | Lamsfus_2024 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of the malaria parasite antigen HRP2, not the drug amodiaquine, which was only administered as part of standard treatment. |
| popPK | Persoons_2021 | irrelevant | 0 | 0 | The study is an in-vitro antiviral activity assay of quinolines (including amodiaquine) against coronaviruses and reports no pharmacokinetic or disposition parameters for amodiaquine. |
| popPK | Tarning_2012 | relevant | 10 | 3 | The paper describes a population PK model for amodiaquine and its metabolite in humans, but the specific numeric parameter estimates (CL, V, etc.) are not provided in the evidence text, likely residing in the results/tables not included here. |
| popPK | de_2018 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of sulfadoxine and pyrimethamine, while amodiaquine is only mentioned as a co-administered drug in the context of malaria chemoprevention guidelines. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 17:50 UTC</sub>
