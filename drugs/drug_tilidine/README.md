<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tilidine&quot;}]"></div>

# tilidine

- **generic name:** tilidine
- **ATC codes:** `N02AX01`, `N02AX51`
- **DrugBank:** [DB13787](https://go.drugbank.com/drugs/DB13787) · **PubChem:** not captured
- **molar mass:** 273.376 g/mol (C17H23NO2) — DrugBank
- **groups:** investigational

## About

Tilidine is an opioid painkiller used to treat moderate to severe pain. It is classified as investigational in DrugBank and is not authorised in the European Union; it is used mainly in a few countries such as Germany, often combined with naloxone.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421108](https://www.wikidata.org/wiki/Q421108) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper (the values present come f…</sub> | [Ringwelski_1975_reference](drugs/drug_tilidine/Tilidine_Ringwelski1975_reference.md) | — | 1-compartment (no model) | 1 | Ringwelski L, [Analog computer analysis of radioactiv…, International journal of cl… (1975) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Thierry_2005_cAMP](drugs/drug_tilidine/pd_Thierry_2005_cAMP.md) | cAMP accumulation ← tilidine · inhibition effect | — | Thierry C et al., Actions of tilidine and nortilidine on…, European journal of pharmac… (2005) | [10.1016/j.ejphar.2004.11.020](https://doi.org/10.1016/j.ejphar.2004.11.020) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2C19** | `Q305` · kfm | formation | [Grün_2012](drugs/drug_tilidine/pgx_Gr_n_2012_CYP2C19_Q305.md) | Grün B et al., Contribution of CYP2C19 and CYP3A4 to t…, British journal of clinical… (2012) | [10.1111/j.1365-2125.2012.04261.x](https://doi.org/10.1111/j.1365-2125.2012.04261.x) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP3A4** | `Q305` · kfm | formation | [Grün_2012](drugs/drug_tilidine/pgx_Gr_n_2012_CYP3A4_Q305.md) | Grün B et al., Contribution of CYP2C19 and CYP3A4 to t…, British journal of clinical… (2012) | [10.1111/j.1365-2125.2012.04261.x](https://doi.org/10.1111/j.1365-2125.2012.04261.x) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tilidine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` formation, `CYP3A4` formation | PGx paper |
| metabolism | small intestine | `CYP3A4` formation | PGx paper |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:44 | 0:45 | 0/1/0 | 1/0/0 | 0/0/2 | 108,282/3,415 | einfracz / qwen3.8-27b | 23 | 12/12 | 22/1 | 0 |

## Coverage

- **PubMed hits:** 172 matched, 58 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brennscheidt_2007.pdf` | Brennscheidt U et al., Pharmacokinetics of tilidine and naloxo…, Arzneimittel-Forschung (2007) | popPK | 8 | [10.1055/s-0031-1296591](https://doi.org/10.1055/s-0031-1296591) | [17396621](https://pubmed.ncbi.nlm.nih.gov/17396621) | The study describes a PK investigation of tilidine and its metabolites in hepatic impairment patients, but the abstract only provides relative changes (e.g., 44% reduction in Cmax) compared to healthy controls rather than absolute numeric parameter values (CL, V, etc.) for the study population. |
| `Ringwelski_1975.pdf` | Ringwelski L, [Analog computer analysis of radioactiv…, International journal of cl… (1975) | popPK | 8 | not captured | [1140877](https://pubmed.ncbi.nlm.nih.gov/1140877) | The paper reports a compartmental model for tilidine in humans with specific half-life values for absorption and elimination, but primary clearance and volume parameters are not explicitly listed as numeric values in the provided text. |
| `Vollmer_1976.pdf` | Vollmer KO et al., [ On the metabolism of ethyl-DL-trans-2…, Arzneimittel-Forschung (1976) | popPK | 7 | not captured | [1037201](https://pubmed.ncbi.nlm.nih.gov/1037201) | The paper is a pharmacokinetic study on tilidine in rats and dogs, but the provided evidence contains only qualitative descriptions of distribution and excretion without specific numeric values for clearance, volume, or half-life. |
| `Eichbaum_2015.pdf` | Eichbaum C et al., Pre-systemic elimination of tilidine: l…, Basic & clinical pharmacolo… (2015) | pgx | 7 | [10.1111/bcpt.12328](https://doi.org/10.1111/bcpt.12328) | [25223231](https://www.ncbi.nlm.nih.gov/pubmed/25223231) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Weiss_2008.pdf` | Weiss J et al., In vitro metabolism of the opioid tilid…, Naunyn-Schmiedeberg's archi… (2008) | pgx | 7 | [10.1007/s00210-008-0294-7](https://doi.org/10.1007/s00210-008-0294-7) | [18516595](https://www.ncbi.nlm.nih.gov/pubmed/18516595) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wustrow_2012.pdf` | Wustrow I et al., In vitro identification of the cytochro…, Naunyn-Schmiedeberg's archi… (2012) | pgx | 7 | [10.1007/s00210-012-0737-z](https://doi.org/10.1007/s00210-012-0737-z) | [22349139](https://www.ncbi.nlm.nih.gov/pubmed/22349139) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |

<sub>queue written 2026-10-07T05:44:26.755984+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baradaran_2025 | irrelevant | 0 | 0 | The paper describes an optical coherence tomography imaging system and contains no pharmacokinetic data or information regarding tilidine. |
| popPK | Brennscheidt_2000 | irrelevant | 4 | 0 | The study models the active metabolite nortilidine (which counts as tilidine PK), but no quantitative parameter values (CL, V, t1/2) are present in the provided evidence text. |
| popPK | Brennscheidt_2007 | relevant | 8 | 2 | The study describes a PK investigation of tilidine and its metabolites in hepatic impairment patients, but the abstract only provides relative changes (e.g., 44% reduction in Cmax) compared to healthy controls rather than absolute numeric parameter values (CL, V, etc.) for the study population. |
| popPK | Chiappini_2021 | irrelevant | 0 | 0 | The paper is a clinical study on the prevalence of opioid dependence in the elderly and does not report any pharmacokinetic parameters for tilidine. |
| popPK | Chue-Sang_2019 | irrelevant | 0 | 0 | The paper is a review of optical phantoms for biomedical polarimetry and does not contain any pharmacokinetic data or parameters for tilidine. |
| popPK | Cook_1988 | irrelevant | 0 | 0 | The paper is a neurophysiology study on fetal lambs investigating evoked potentials and does not involve tilidine or pharmacokinetic parameters. |
| popPK | Cordonnier_1987 | irrelevant | 0 | 0 | The paper is a case report of a fatal poisoning describing qualitative identification and quantitation via chromatography/mass spectrometry, but does not report quantitative population pharmacokinetic parameters (CL, V, ka, etc.) or a PK model for tilidine. |
| popPK | Cottrill_2021 | irrelevant | 0 | 0 | The study is a pharmacogenomic analysis of pain medication metabolizing enzymes in humans and does not measure or report quantitative pharmacokinetic parameters (such as clearance or volume) for tilidine. |
| PGx | Cottrill_2021 | not_relevant | 0 | 0 | The paper catalogs genotypes and metabolic phenotypes (e.g., metabolizer status) for tilidine but does not report measured changes in specific PK or PD parameters. |
| popPK | Dubinsky_1975 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PGx | Eichbaum_2015 | not_relevant | 0 | 0 | The study investigates the effect of CYP3A4 inhibition/activation (using grapefruit juice and efavirenz) on tilidine pharmacokinetics, but does not report on genetic variants or pharmacogenomic effects. |
| popPK | Feng_2017 | irrelevant | 1 | 0 | The paper is a review of opioid drug interactions; tilidine is listed only as a subject in antimycotic and protease inhibitor interaction summaries without specific quantitative PK parameters (CL, V, ka) provided in the evidence. |
| popPK | Freye_2000 | irrelevant | 0 | 0 | The study evaluates pharmacodynamic effects (transit time, pupillary reflex) rather than pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | GIESE_1961 | irrelevant | 0 | 0 | The paper is a study on the regeneration of the protozoan Blepharisma undulans and contains no information regarding the drug tilidine or pharmacokinetic parameters. |
| popPK | Gailevičius_2020 | irrelevant | 0 | 0 | The paper is a materials science study on the optical birefringence of black silicon surfaces and contains no pharmacokinetic data for tilidine. |
| popPK | Giorgetti_2024 | irrelevant | 0 | 0 | The paper is a forensic case series focusing on novel synthetic opioids (U-47700, MeACF) where tilidine is merely a co-detected substance without reported quantitative PK parameters. |
| PD | Grün_2009 | not_relevant | 3 | 2 | The study reports PK parameters and qualitative changes in analgesic effect (pain thresholds) using non-parametric ANOVA, but does not provide a concentration-effect model or numeric PD parameters (e.g., EC50, Emax) for tilidine. |
| PGx | Grün_2009 | not_relevant | 0 | 0 | The study investigates a pharmacokinetic interaction caused by the co-administration of voriconazole, not a pharmacogenomic effect based on genetic variants or genotypes. |
| popPK | Hankemeier_1991 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the analgesic efficacy of tilidine during a procedure, reporting only pain scores and not pharmacokinetic parameters. |
| popPK | Hoffmeister_1988 | irrelevant | 0 | 0 | This is a behavioral pharmacology study in rhesus monkeys assessing stimulus effects (generalization) of codeine and other opioids, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Hristova_2024 | irrelevant | 0 | 0 | The paper is a theoretical optics study on polarization retarders and contains no pharmacokinetic data or mention of tilidine. |
| popPK | Högger_1999 | irrelevant | 1 | 0 | The study focuses on analgesic efficacy and only mentions "pronounced interindividual differences" in plasma levels without providing any quantitative PK parameters (CL, V, ka, etc.). |
| PD | Högger_1999 | not_relevant | 2 | 1 | The study reports qualitative efficacy rankings and mentions plasma levels but does not provide numeric concentration-effect data, dose-response curves, or PD parameters for tilidine. |
| PD | Högger_2000 | not_relevant | 2 | 1 | The study reports a qualitative correlation between plasma epinephrine levels and adverse effects (vertigo) but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model for the analgesic or adverse effect. |
| popPK | Jage_2008 | irrelevant | 0 | 0 | The paper is a qualitative clinical review of analgesics with no original quantitative pharmacokinetic data for tilidine. |
| popPK | Jage_2008_2 | irrelevant | 0 | 0 | The paper is a narrative review of perioperative analgesia without original quantitative pharmacokinetic parameters or models for tilidine. |
| popPK | Jasinski_1986 | irrelevant | 0 | 0 | The study focuses on subjective effects and abuse potential (behavioral/pharmacodynamic outcomes) and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Jobski_2024 | irrelevant | 0 | 0 | The study is a descriptive analysis of pain medication regimens (utilization patterns) after hip fractures, not a pharmacokinetic study reporting disposition parameters for tilidine. |
| popPK | Kleine-Borgmann_2021 | irrelevant | 0 | 0 | This is a pharmacodynamics/clinical pain study analyzing analgesic efficacy and side effects in healthy volunteers, with no pharmacokinetic parameters (CL, V, ka, etc.) reported. |
| popPK | Krüger_2014 | irrelevant | 0 | 0 | The study is an internet survey regarding opioid misuse and does not report any pharmacokinetic parameters for tilidine. |
| popPK | Leary_1976 | irrelevant | 0 | 0 | The study is a clinical efficacy comparison of tilidine and morphine for pain relief, with no pharmacokinetic parameters (CL, V, ka, etc.) reported or extracted. |
| popPK | Lien_2022 | irrelevant | 0 | 0 | The paper is a biophotonics study on collagen glycation and birefringence, containing no pharmacokinetic data or mention of tilidine. |
| popPK | Lötsch_2005 | irrelevant | 0 | 0 | The paper is a general review on opioid metabolism; it mentions tilidine only as an example of a prodrug and does not provide quantitative PK parameters (CL, V, etc.) for tilidine. |
| popPK | Maalouli_2024 | irrelevant | 1 | 0 | This is an analytical method development study for exhaled breath aerosol analysis that only qualitatively confirms detection of tilidine without reporting any pharmacokinetic parameters. |
| popPK | Naoumkina_2024 | irrelevant | 0 | 0 | The paper is a review on naturally colored cotton and textile applications, containing no pharmacokinetic data for tilidine. |
| popPK | Oldenbourg_1998 | irrelevant | 0 | 0 | The paper describes birefringence measurements of microtubules using polarized light microscopy and contains no pharmacokinetic data for tilidine. |
| popPK | Radbruch_2013 | irrelevant | 0 | 0 | The paper is a review of abuse and misuse potential, containing no pharmacokinetic parameter values for tilidine. |
| popPK | Richards_2022 | irrelevant | 0 | 0 | This is a global epidemiological study analyzing opioid consumption rates, not a pharmacokinetic study reporting disposition parameters for tilidine. |
| popPK | Ringwelski_1975 | relevant | 8 | 4 | The paper reports a compartmental model for tilidine in humans with specific half-life values for absorption and elimination, but primary clearance and volume parameters are not explicitly listed as numeric values in the provided text. |
| popPK | Romagnoli_1975 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (respiratory depression) rather than pharmacokinetics, and no quantitative disposition parameters (CL, V, etc.) for tilidine are reported. |
| popPK | Saarnivaara_1980 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| popPK | Schutter_2010 | irrelevant | 0 | 0 | The paper is a clinical observational study on buprenorphine efficacy in patients who previously used tilidine as a comparator, with no pharmacokinetic data reported. |
| popPK | Schutter_2010_2 | irrelevant | 0 | 0 | no_text gate: only 172 chars of text extracted (&lt; 400) |
| popPK | Shah_2016 | irrelevant | 0 | 0 | The paper is a review on low protein diet management in chronic kidney disease and does not contain any pharmacokinetic data or parameters for tilidine. |
| popPK | Sommer_2024 | irrelevant | 0 | 0 | The paper focuses on pharmacovigilance and regression modeling of adverse drug reactions in polypharmacy, containing no pharmacokinetic data for tilidine. |
| PD | Sommer_2024 | not_relevant | 0 | 0 | The paper analyzes adverse drug reaction risk using regression models on polypharmacy data, not pharmacodynamic exposure-response or dose-response relationships. |
| popPK | Tegeder_1999 | irrelevant | 0 | 0 | The paper is a review discussing the general effects of liver disease on opioid pharmacokinetics without reporting original quantitative disposition parameters for tilidine. |
| popPK | Trojan_1978 | irrelevant | 0 | 0 | The paper is a review of tilidine abuse and dependence, lacking original pharmacokinetic data or quantitative disposition parameters. |
| popPK | Vollmer_1976 | relevant | 7 | 0 | The paper is a pharmacokinetic study on tilidine in rats and dogs, but the provided evidence contains only qualitative descriptions of distribution and excretion without specific numeric values for clearance, volume, or half-life. |
| popPK | Vormfelde_2001 | irrelevant | 0 | 0 | The paper discusses methadone-related mortality and prevention strategies, with no pharmacokinetic data for tilidine. |
| popPK | Wall_2020 | irrelevant | 0 | 0 | The paper is a clinical audit regarding prescribing practices and pharmacy supply of analgesics, not a pharmacokinetic study; no PK parameters are reported. |
| popPK | Weber_2020 | irrelevant | 0 | 0 | The paper is a general review of pain therapy strategies and contains no original quantitative pharmacokinetic data for tilidine. |
| popPK | Weber_2025 | irrelevant | 0 | 0 | The paper is a general review of pain therapy in palliative care and does not contain original pharmacokinetic data, numeric parameter values, or compartmental models for tilidine. |
| popPK | Weiss_2008 | irrelevant | 0 | 0 | The study is in-vitro mechanistic only, reporting metabolic kinetics (Km, Vmax) rather than quantitative disposition parameters (CL, V, ka, half-life) for tilidine. |
| PGx | Weiss_2008 | not_relevant | 0 | 0 | The study focuses on in vitro enzyme kinetics and drug-drug interactions, without reporting pharmacogenomic effects (genotype-based) on tilidine PK/PD. |
| PGx | Wustrow_2012 | not_relevant | 0 | 0 | The paper is an in vitro study identifying CYP enzymes and kinetic parameters (Km, Vmax) using liver microsomes and recombinant proteins, and it does not investigate gene variants or genotypes affecting PK/PD in humans. |
| popPK | Wörz_1984 | irrelevant | 0 | 0 | The paper discusses the therapy of cancer pain with morphine and other opioids (pethidine, tramadol, buprenorphine) but does not mention tilidine or provide any pharmacokinetic data for it. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper describes a microscopy imaging technique (GROM) and contains no pharmacokinetic data or information regarding the drug tilidine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 05:44 UTC</sub>
