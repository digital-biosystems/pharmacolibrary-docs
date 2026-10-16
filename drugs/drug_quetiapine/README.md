<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;quetiapine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quetiapine_Chen2025_reference&quot;,&quot;label&quot;:&quot;Chen_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quetiapine/Quetiapine_Chen2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quetiapine_Fukushi2020_reference&quot;,&quot;label&quot;:&quot;Fukushi_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quetiapine/Quetiapine_Fukushi2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quetiapine_Zhou2015_reference&quot;,&quot;label&quot;:&quot;Zhou_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quetiapine/Quetiapine_Zhou2015_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quetiapine_Li2026_reference&quot;,&quot;label&quot;:&quot;Li_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quetiapine/Quetiapine_Li2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# quetiapine

- **generic name:** quetiapine
- **ATC codes:** `N05AH04`
- **DrugBank:** [DB01224](https://go.drugbank.com/drugs/DB01224) · **PubChem:** [CID 5002](https://pubchem.ncbi.nlm.nih.gov/compound/5002)
- **molar mass:** 383.507 g/mol (C21H25N3O2S) — DrugBank
- **groups:** approved, investigational

## About

Quetiapine is an atypical antipsychotic used for conditions such as schizophrenia, bipolar disorder, and related mental disorders. It is an approved medicine used widely in psychiatric care, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408535](https://www.wikidata.org/wiki/Q408535) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| quetiapine | parent | 383.507 | C21H25N3O2S | DrugBank | [5002](https://pubchem.ncbi.nlm.nih.gov/compound/5002) | Chen_2025, Fukushi_2020, Han_2024, Isbister_2007, Li_2024, Zhou_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:06 | 4:05 | 3/1/4 | 6/1/0 | 0/0/0 | 182,793/12,819 | ollama / glm-5.3-flash | 10 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial</span> | [Chen_2025_reference](drugs/drug_quetiapine/Quetiapine_Chen2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Chen X et al., Drug-Drug Interactions and Initial Dosa…, Drug design, development an… (2025) | [10.2147/DDDT.S538856](https://doi.org/10.2147/DDDT.S538856) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span> | [Fukushi_2020_reference](drugs/drug_quetiapine/Quetiapine_Fukushi2020_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Fukushi R et al., Population Pharmacokinetics Analysis of…, Clinical therapeutics (2020) | [10.1016/j.clinthera.2020.04.006](https://doi.org/10.1016/j.clinthera.2020.04.006) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.333). Primary extraction retained.">cross-check: partial</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Zhou_2015_reference](drugs/drug_quetiapine/Quetiapine_Zhou2015_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Zhou D et al., Population pharmacokinetic modeling of…, Journal of clinical pharmac… (2015) | [10.1002/jcph.544](https://doi.org/10.1002/jcph.544) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Han_2024_reference](drugs/drug_quetiapine/Quetiapine_Han2024_reference.md) | — | 1-compartment (no model) | 3 | Han L et al., Insights into the population pharmacoki…, Expert review of clinical p… (2024) | [10.1080/17512433.2023.2295428](https://doi.org/10.1080/17512433.2023.2295428) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.625). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Isbister_2007_reference](drugs/drug_quetiapine/Quetiapine_Isbister2007_reference.md) | — | 1-compartment (no model) | 4 | Isbister GK et al., Pharmacokinetics of quetiapine in overd…, Clinical pharmacology and t… (2007) | [10.1038/sj.clpt.6100193](https://doi.org/10.1038/sj.clpt.6100193) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Li_2024_reference](drugs/drug_quetiapine/Quetiapine_Li2024_reference.md) | — | 1-compartment (no model) | 6 (+4 cov.) | Li X et al., pyDarwin: A Machine Learning Enhanced A…, Clinical pharmacology and t… (2024) | [10.1002/cpt.3114](https://doi.org/10.1002/cpt.3114) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Li_2026_reference](drugs/drug_quetiapine/Quetiapine_Li2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Li X et al., Multi-objective optimization in populat…, Journal of pharmacokinetics… (2026) | [10.1007/s10928-026-10036-9](https://doi.org/10.1007/s10928-026-10036-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lin_2024_reference](drugs/drug_quetiapine/Quetiapine_Lin2024_reference.md) | — | 1-compartment (no model) | 0 | Lin M et al., The impact of CYP3A5*3 on oral quetiapi…, Journal of affective disord… (2024) | [10.1016/j.jad.2024.01.170](https://doi.org/10.1016/j.jad.2024.01.170) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Alqahtani_2016_occupancy](drugs/drug_quetiapine/pd_Alqahtani_2016_occupancy.md) | receptor/transporter occupancy ← quetiapine · direct Emax (saturable) effect | — | Alqahtani S et al., Development of a Physiologically Based…, Clinical pharmacokinetics (2016) | [10.1007/s40262-016-0367-6](https://doi.org/10.1007/s40262-016-0367-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chapel_2009_QTcF](drugs/drug_quetiapine/pd_Chapel_2009_QTcF.md) | QTcF ← quetiapine · direct linear effect | — | Chapel S et al., Exposure-response analysis in patients…, Journal of clinical pharmac… (2009) | [10.1177/0091270009344855](https://doi.org/10.1177/0091270009344855) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kimko_2000_BPRS](drugs/drug_quetiapine/pd_Kimko_2000_BPRS.md) | Brief Psychiatric Rating Scale ← quetiapine · direct Emax (saturable) effect | — | Kimko HC et al., Prediction of the outcome of a phase 3…, Clinical pharmacology and t… (2000) | [10.1067/mcp.2000.110975](https://doi.org/10.1067/mcp.2000.110975) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Newman-Tancredi_1998_35S_GTPgammaS_binding](drugs/drug_quetiapine/pd_Newman_Tancredi_1998_35S_GTPgammaS_binding.md) | [35S]GTPgammaS binding (G-protein activation) at h5-HT1A receptors ← quetiapine · direct sigmoid Emax (Hill) effect | — | Newman-Tancredi A et al., Agonist and antagonist actions of antip…, European journal of pharmac… (1998) | [10.1016/s0014-2999(98)00483-x](https://doi.org/10.1016/s0014-2999(98)00483-x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Park_2025_5_HT3_current](drugs/drug_quetiapine/pd_Park_2025_5_HT3_current.md) | 5-HT3 receptor-mediated peak current (inhibition by quetiapine, co-application with 3 μM 5-HT) ← quetiapine · direct sigmoid Emax (Hill) effect | — | Park YS et al., Quetiapine competitively inhibits 5-HT, The Korean journal of physi… (2025) | [10.4196/kjpp.24.363](https://doi.org/10.4196/kjpp.24.363) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Park_2025_5_HT3_current_2](drugs/drug_quetiapine/pd_Park_2025_5_HT3_current_2.md) | 5-HT3 receptor-mediated peak current (inhibition by quetiapine, co-application with 10 μM 5-HT) ← quetiapine · direct sigmoid Emax (Hill) effect | — | Park YS et al., Quetiapine competitively inhibits 5-HT, The Korean journal of physi… (2025) | [10.4196/kjpp.24.363](https://doi.org/10.4196/kjpp.24.363) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Park_2025_5_HT3_current_3](drugs/drug_quetiapine/pd_Park_2025_5_HT3_current_3.md) | 5-HT3 receptor-mediated peak current (inhibition by quetiapine, pretreatment before co-application with 10 μM 5-HT) ← quetiapine · direct sigmoid Emax (Hill) effect | — | Park YS et al., Quetiapine competitively inhibits 5-HT, The Korean journal of physi… (2025) | [10.4196/kjpp.24.363](https://doi.org/10.4196/kjpp.24.363) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Park_2025_5_HT3_current_4](drugs/drug_quetiapine/pd_Park_2025_5_HT3_current_4.md) | 5-HT3 receptor-mediated peak current (5-HT concentration-response, quetiapine co-application) ← 5-HT (with quetiapine co-application) · direct sigmoid Emax (Hill) effect | — | Park YS et al., Quetiapine competitively inhibits 5-HT, The Korean journal of physi… (2025) | [10.4196/kjpp.24.363](https://doi.org/10.4196/kjpp.24.363) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Park_2025_open_state_current_decay](drugs/drug_quetiapine/pd_Park_2025_open_state_current_decay.md) | 5-HT3 receptor open-state current decay (association kinetics of quetiapine) ← quetiapine · direct linear effect | — | Park YS et al., Quetiapine competitively inhibits 5-HT, The Korean journal of physi… (2025) | [10.4196/kjpp.24.363](https://doi.org/10.4196/kjpp.24.363) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wang_2006_Rhd_123_fluorescence](drugs/drug_quetiapine/pd_Wang_2006_Rhd_123_fluorescence.md) | Intracellular accumulation of rhodamine 123 (P-gp activity inhibition) ← quetiapine · direct Emax (saturable) effect | — | Wang JS et al., Evaluation of antipsychotic drugs as in…, Psychopharmacology (2006) | [10.1007/s00213-006-0437-9](https://doi.org/10.1007/s00213-006-0437-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Dias_2024_DA](drugs/drug_quetiapine/pd_Dias_2024_DA.md) | Dopamine medial prefrontal cortex extracellular concentrations ← quetiapine (unbound brain concentration) · delayed effect through transit (transduction) compartments | — | Dias BB et al., Pharmacokinetic/pharmacodynamic modelin…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13107](https://doi.org/10.1002/psp4.13107) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=quetiapine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` unknown | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), DRD1 (target), DRD2 (target), DRD3 (target), DRD4 (target), DRD5 (target), HRH1 (target), HTR1A (partial agonist), HTR1A (target), HTR1B (target), HTR1D (target), HTR1E (target), HTR2A (target), HTR2C (target), HTR3A (target), HTR6 (target), HTR7 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 56 matched, 20 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 8  ·  extracted 3  ·  needs_review 4  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fukushi_2020.pdf` | Fukushi R et al., Population Pharmacokinetics Analysis of…, Clinical therapeutics (2020) | popPK | 10 | [10.1016/j.clinthera.2020.04.006](https://doi.org/10.1016/j.clinthera.2020.04.006) | [32518042](https://pubmed.ncbi.nlm.nih.gov/32518042) | Population PK model of quetiapine XR in patients with numeric CL/F (87.7 L/h) and V/F (277 L) reported directly in the abstract. |
| `Lin_2024.pdf` | Lin M et al., The impact of CYP3A5*3 on oral quetiapi…, Journal of affective disord… (2024) | popPK | 10 | [10.1016/j.jad.2024.01.170](https://doi.org/10.1016/j.jad.2024.01.170) | [38262522](https://pubmed.ncbi.nlm.nih.gov/38262522) | Population PK model of quetiapine in human patients with numeric CL/F values (81.1 vs 43.6 L/h) and IIV reported directly in the abstract. |
| `Zhou_2015.pdf` | Zhou D et al., Population pharmacokinetic modeling of…, Journal of clinical pharmac… (2015) | popPK | 10 | [10.1002/jcph.544](https://doi.org/10.1002/jcph.544) | [25975812](https://pubmed.ncbi.nlm.nih.gov/25975812) | Population PK model of quetiapine with numeric V, kel, and ka values reported directly in the abstract. |
| `Isbister_2007.pdf` | Isbister GK et al., Pharmacokinetics of quetiapine in overd…, Clinical pharmacology and t… (2007) | popPK | 9 | [10.1038/sj.clpt.6100193](https://doi.org/10.1038/sj.clpt.6100193) | [17410121](https://pubmed.ncbi.nlm.nih.gov/17410121) | Human overdose population-PK study of quetiapine with one-compartment model; half-life and charcoal effect given, but CL/V numeric values not shown in the evidence. |
| `Kimko_2000.pdf` | Kimko HC et al., Prediction of the outcome of a phase 3…, Clinical pharmacology and t… (2000) | popPK | 8 | [10.1067/mcp.2000.110975](https://doi.org/10.1067/mcp.2000.110975) | [11103759](https://pubmed.ncbi.nlm.nih.gov/11103759) | Population PK model of quetiapine (one-compartment, first-order absorption/elimination) is described, but no numeric parameter values appear in the evidence. |
| `Alqahtani_2016.pdf` | Alqahtani S et al., Development of a Physiologically Based…, Clinical pharmacokinetics (2016) | popPK | 7 | [10.1007/s40262-016-0367-6](https://doi.org/10.1007/s40262-016-0367-6) | [26914771](https://pubmed.ncbi.nlm.nih.gov/26914771) | A PBPK/PD model of quetiapine is the subject drug, but no numeric PK parameter values appear in the provided evidence (likely in figures/supplementary material not included). |
| `Han_2024.pdf` | Han L et al., Insights into the population pharmacoki…, Expert review of clinical p… (2024) | popPK | 6 | [10.1080/17512433.2023.2295428](https://doi.org/10.1080/17512433.2023.2295428) | [38108086](https://pubmed.ncbi.nlm.nih.gov/38108086) | Systematic review of quetiapine population PK studies reporting a quantitative median apparent clearance (87.7 L/h) and covariate effects, but full model parameter values are not included in the evidence. |

<sub>queue written 2026-10-06T17:03:07.244144+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alqahtani_2016 | relevant | 7 | 2 | A PBPK/PD model of quetiapine is the subject drug, but no numeric PK parameter values appear in the provided evidence (likely in figures/supplementary material not included). |
| popPK | Ceci_1999 | irrelevant | 0 | 0 | In vitro electrophysiology study of dopamine receptor antagonism; quetiapine is only a test agent with no PK parameters. |
| popPK | Chapel_2009 | irrelevant | 1 | 1 | Quetiapine is only an assay-sensitivity comparator in an asenapine QTc exposure-response analysis; no quetiapine PK parameters (CL, V, ka, etc.) are reported. |
| popPK | Dias_2024 | relevant | 6 | 4 | Rat PK/PD model of quetiapine brain concentrations driving dopamine response; PK parameters from prior popPK model, PD parameter estimates partly in Table 1/supplementary (Table S1) not fully provided in evidence. |
| popPK | Goikolea_2013 | irrelevant | 0 | 0 | This is a clinical meta-analysis of depressive switch rates with no pharmacokinetic parameters for quetiapine. |
| popPK | Kimko_2000 | relevant | 8 | 3 | Population PK model of quetiapine (one-compartment, first-order absorption/elimination) is described, but no numeric parameter values appear in the evidence. |
| popPK | Li_2026 | relevant | 8 | 3 | Quetiapine popPK models were built (human, sparse sampling) but the actual parameter estimates live in supplementary Tables S2–S6 and figures not provided; only OFV/NEP ranges and a few fixed ka values appear in text. |
| popPK | Matsui-Sakata_2005 | irrelevant | 2 | 0 | PK-PD/EPS risk modeling using literature data; no quetiapine disposition parameters (CL, V, ka) reported, and any PK values would come from cited literature not provided. |
| popPK | Newman-Tancredi_1998 | irrelevant | 0 | 0 | In vitro receptor binding study; quetiapine is only one of many tested compounds, no PK parameters. |
| popPK | Park_2025 | irrelevant | 0 | 0 | In-vitro electrophysiology study of quetiapine's antagonism at 5-HT3 receptors in NCB20 cells; no PK disposition parameters (CL, V, ka, half-life, or population-PK model) are reported. |
| popPK | Wallen_2022 | irrelevant | 0 | 0 | Quetiapine is only mentioned as an intermittently administered sedative; no PK parameters are reported. |
| popPK | Wang_2006 | irrelevant | 1 | 3 | In-vitro P-gp inhibition study; quetiapine is only an inhibitor tested, no PK disposition parameters for quetiapine. |
| popPK | Zeng_1997 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study with no PK parameters for quetiapine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 17:03 UTC</sub>
