<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;cladribine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cladribine_Lu2024_reference&quot;,&quot;label&quot;:&quot;Lu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lu2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Lindemalm2005_population_average_estimate&quot;,&quot;label&quot;:&quot;Lindemalm_2005_population_average_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lindemalm2005_population_average_estimate.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# cladribine

- **generic name:** cladribine
- **ATC codes:** `L01BB04`, `L04AA40`
- **DrugBank:** [DB00242](https://go.drugbank.com/drugs/DB00242) · **PubChem:** [CID 20279](https://pubchem.ncbi.nlm.nih.gov/compound/20279)
- **molar mass:** 285.687 g/mol (C10H12ClN5O3) — DrugBank
- **groups:** approved, investigational

## About

Cladribine is a purine analogue medicine used to treat hairy cell leukemia and multiple sclerosis, and has also been used for other leukemias and lymphomas. It is approved and authorised in the European Union, where it is used for multiple sclerosis and hairy cell leukemia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414030](https://www.wikidata.org/wiki/Q414030) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cladribine | parent | 285.687 | C10H12ClN5O3 | DrugBank | [20279](https://pubchem.ncbi.nlm.nih.gov/compound/20279) | Kearns_1994, Lindemalm_2005, Savic_2017, Sonderegger_2000 |
| 2-chloroadenine | metabolite | 169.572 | C5H4ClN5 | PubChem | [94904](https://pubchem.ncbi.nlm.nih.gov/compound/94904) | Savic_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:09 | 2:05:12 | 1/2/3 | 1/0/0 | 0/0/0 | 223,668/45,969 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 3/10 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.25), gpt-oss-120b (partly confirmed, agreement 0.333). Primary extraction retained.">cross-check: partial 0/2</span> | [Lu_2024_reference](drugs/drug_cladribine/Cladribine_Lu2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Lu H et al., Asia-inclusive drug development leverag…, Clinical and translational… (2024) | [10.1111/cts.70050](https://doi.org/10.1111/cts.70050) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>blocking: C1_half_life_beta failed (ratio 1.3779)</sub><br><sub>route_to: `human_review`</sub> | [Lindemalm_2005_interindividual_variability_estimate](drugs/drug_cladribine/Cladribine_Lindemalm2005_interindividual_variability_estimat.md) | — | 1-compartment (no model) | 2 | Lindemalm S et al., Application of population pharmacokinet…, BMC pharmacology (2005) | [10.1186/1471-2210-5-4](https://doi.org/10.1186/1471-2210-5-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Lindemalm_2005_population_average_estimate](drugs/drug_cladribine/Cladribine_Lindemalm2005_population_average_estimate.md) | ▶ model + simulator | 2-compartment, oral | 8 | Lindemalm S et al., Application of population pharmacokinet…, BMC pharmacology (2005) | [10.1186/1471-2210-5-4](https://doi.org/10.1186/1471-2210-5-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667), gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q91 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Sonderegger_2000_reference](drugs/drug_cladribine/Cladribine_Sonderegger2000_reference.md) | — | 1-compartment (no model) | 3 | Sonderegger T et al., Pharmacokinetics of 2-chloro-2'-deoxyad…, Cancer chemotherapy and pha… (2000) | [10.1007/s002800000129](https://doi.org/10.1007/s002800000129) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.818), gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Kearns_1994_reference](drugs/drug_cladribine/Cladribine_Kearns1994_reference.md) | — | 1-compartment (no model) | 6 | Kearns CM et al., Pharmacokinetics of cladribine (2-chlor…, Cancer research (1994) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.87), gpt-oss-120b (partly confirmed, agreement 0.921). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Savic_2017_reference](drugs/drug_cladribine/Cladribine_Savic2017_reference.md) | — | parent + metabolite (no model) | 14 (+1 cov.) | Savic RM et al., Population Pharmacokinetics of Cladribi…, Clinical pharmacokinetics (2017) | [10.1007/s40262-017-0516-6](https://doi.org/10.1007/s40262-017-0516-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by ollama:gpt-oss:120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Guchelaar_1998_apoptotic_cells](drugs/drug_cladribine/pd_Guchelaar_1998_apoptotic_cells.md) | apoptotic cells ← cladribine · direct sigmoid Emax (Hill) effect | — | Guchelaar HJ et al., Apoptosis- and necrosis-inducing potent…, Cancer chemotherapy and pha… (1998) | [10.1007/s002800050788](https://doi.org/10.1007/s002800050788) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by ollama:gpt-oss:120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Guchelaar_1998_necrotic_cells](drugs/drug_cladribine/pd_Guchelaar_1998_necrotic_cells.md) | necrotic cells ← cladribine · direct sigmoid Emax (Hill) effect | — | Guchelaar HJ et al., Apoptosis- and necrosis-inducing potent…, Cancer chemotherapy and pha… (1998) | [10.1007/s002800050788](https://doi.org/10.1007/s002800050788) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by ollama:gpt-oss:120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Guchelaar_1998_vital_cells](drugs/drug_cladribine/pd_Guchelaar_1998_vital_cells.md) | vital cells ← cladribine · inhibition effect | — | Guchelaar HJ et al., Apoptosis- and necrosis-inducing potent…, Cancer chemotherapy and pha… (1998) | [10.1007/s002800050788](https://doi.org/10.1007/s002800050788) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cladribine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `SLC29A1` unknown | DrugBank actor |
| distribution | liver | `SLC29A1` unknown | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADA (inhibitor), DCK (substrate), DGUOK (substrate), DNA (disruptor), DNA (other/unknown), PARP1 (inducer), PNP (inducer), POLA1 (inhibitor), POLE (inhibitor), POLE2 (inhibitor), POLE3 (inhibitor), POLE4 (inhibitor), RRM1 (inhibitor), RRM2 (inhibitor), RRM2B (inhibitor), SLC28A3 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 38 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 1  ·  needs_review 3  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kearns_1994.pdf` | Kearns CM et al., Pharmacokinetics of cladribine (2-chlor…, Cancer research (1994) | popPK | 10 | not captured | [7906999](https://pubmed.ncbi.nlm.nih.gov/7906999) | The paper reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for cladribine in pediatric patients with all numeric values explicitly stated in the text. |
| `Sonderegger_2000.pdf` | Sonderegger T et al., Pharmacokinetics of 2-chloro-2'-deoxyad…, Cancer chemotherapy and pha… (2000) | popPK | 10 | [10.1007/s002800000129](https://doi.org/10.1007/s002800000129) | [10912576](https://pubmed.ncbi.nlm.nih.gov/10912576) | The study reports quantitative pharmacokinetic parameters (Vd, kelim, AUC) for cladribine in humans, with values explicitly stated in the abstract. |
| `Saven_1996.pdf` | Saven A et al., Pharmacokinetic study of oral and bolus…, Journal of clinical oncolog… (1996) | popPK | 9 | [10.1200/JCO.1996.14.3.978](https://doi.org/10.1200/JCO.1996.14.3.978) | [8622049](https://pubmed.ncbi.nlm.nih.gov/8622049) | The study reports a three-compartment model and bioavailability (F) for cladribine, but specific numeric values for clearance, volume, or rate constants are not explicitly listed in the provided text. |

<sub>queue written 2026-10-15T01:05:03.524014+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baltz_1993 | irrelevant | 2 | 0 | The paper is a review that mentions a two-compartment model but does not provide specific quantitative PK parameter values (CL, V, t1/2) in the text. |
| PGx | Benyahia_2025 | not_relevant | 0 | 0 | The paper is a clinical case report describing the management of CMV retinitis and AML, with no data on pharmacogenomic effects on cladribine PK/PD. |
| PGx | Cross_2020 | not_relevant | 0 | 0 | The paper is a review of Hairy Cell Leukaemia pathogenesis and treatment, discussing BRAF mutations and drug classes, but does not report pharmacogenomic effects on the PK or PD of cladribine. |
| PGx | Fukuda_2012 | not_relevant | 2 | 0 | The text is a review discussing the general role of ABC transporters in nucleoside drug resistance and mentions cladribine only as an example of a substrate, without reporting specific pharmacogenomic effects on PK/PD parameters. |
| popPK | Ganelin-Cohen_2026 | irrelevant | 0 | 0 | The paper is a clinical outcomes and safety study of cladribine in pediatric MS, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Gomez-Figueroa_2025 | irrelevant | 0 | 0 | The paper is a retrospective registry analysis of clinical outcomes (NEDA-3, ARR) in multiple sclerosis patients and does not report any pharmacokinetic parameters for cladribine. |
| popPK | Guchelaar_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic model of apoptosis and necrosis, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Hersh_2024 | irrelevant | 0 | 0 | The study analyzes brain atrophy outcomes in multiple sclerosis patients and mentions cladribine only as a comparator drug in an efficacy group, without reporting any pharmacokinetic parameters. |
| PGx | Laszlo_2010 | not_relevant | 2 | 5 | The paper reports an association between hCNT1 expression and clinical response (CR vs non-CR), but does not report changes in specific pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., biomarker levels) parameters of cladribine. |
| PGx | Laszlo_2011 | not_relevant | 2 | 5 | The paper reports an association between hCNT1 expression and clinical response (CR), but does not report changes in specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters. |
| PGx | LeBlanc_2022 | not_relevant | 0 | 0 | The paper reports on the predictive value of a CCND1 polymorphism for disease subtype and treatment response, but does not report pharmacokinetic or pharmacodynamic parameters of cladribine (e.g., AUC, Cmax, clearance) modified by genotype. |
| popPK | Lindemalm_2003 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and cellular metabolism comparison, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Loganathan_2022 | not_relevant | 2 | 0 | The paper is an in silico molecular docking study predicting binding affinity, not a clinical or experimental report of a pharmacokinetic or pharmacodynamic parameter change in humans or animals. |
| popPK | Lu_2024 | irrelevant | 2 | 0 | The paper is a review of drug development strategies; while it mentions cladribine's half-life (~1 day) and qualitative PK properties, it does not report quantitative population PK parameter estimates (CL, V, Q) or a compartmental model for cladribine. |
| PGx | Lu_2025 | not_relevant | 0 | 0 | The paper studies capecitabine, not cladribine, and focuses on enzyme expression rather than pharmacogenomic effects on PK/PD. |
| PGx | Lübke_2022 | not_relevant | 0 | 0 | The paper compares the clinical efficacy of midostaurin and cladribine in systemic mastocytosis but does not report pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of cladribine. |
| PGx | Robak_2012 | not_relevant | 0 | 0 | The paper is a general review of purine nucleoside analogs and does not report specific pharmacogenomic effects of gene variants on cladribine PK or PD parameters. |
| PGx | Rossi_2005 | not_relevant | 0 | 0 | The paper discusses inherited disorders of bilirubin metabolism and UGT1A1 variants, but does not mention cladribine or its pharmacokinetics/pharmacodynamics. |
| popPK | Saven_1996 | relevant | 9 | 4 | The study reports a three-compartment model and bioavailability (F) for cladribine, but specific numeric values for clearance, volume, or rate constants are not explicitly listed in the provided text. |
| PGx | Szturz_2014 | not_relevant | 0 | 0 | The paper focuses on the clinical efficacy of anakinra in Schnitzler syndrome and only mentions cladribine as a previously failed therapy without analyzing its pharmacokinetics or pharmacodynamics in relation to genetic variants. |
| PGx | Szuber_2021 | not_relevant | 0 | 0 | The paper is a clinical management review for Chronic Neutrophilic Leukemia and mentions cladribine only as a treatment option, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Takenaka_2007 | not_relevant | 2 | 5 | The paper reports transporter-mediated effects (Abcg2/Mrp4) on cladribine distribution and cytotoxicity in knockout mice, which is a pharmacological mechanism study rather than a clinical pharmacogenomic study of human genetic variants affecting PK/PD parameters. |
| PGx | Thiele_2020 | not_relevant | 0 | 0 | The study investigates the pharmacogenomic effects of ABCG2 on teriflunomide, not cladribine. |
| PGx | Turner_2026 | not_relevant | 0 | 0 | The paper compares dosing schedules (weekly vs. continuous) of cladribine and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Zarzuelo_2021 | not_relevant | 2 | 0 | The paper is a review that mentions ADA polymorphisms for cladribine as a potential predictive marker for treatment response, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes or fitted effect sizes. |
| PGx | de_2008 | not_relevant | 2 | 5 | The paper reports in vitro transporter function and cellular resistance mechanisms, not a pharmacogenomic effect on PK/PD parameters in humans. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 01:05 UTC</sub>
