<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;canagliflozin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Canagliflozin_Yao2023_reference&quot;,&quot;label&quot;:&quot;Yao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Yao_2023_UGEc&quot;,&quot;label&quot;:&quot;Yao_2023 \u00b7 \u0394UGEc&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/pd_Yao_2023_UGEc.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# canagliflozin

- **generic name:** canagliflozin
- **ATC codes:** `A10BD16`, `A10BK02`
- **DrugBank:** [DB08907](https://go.drugbank.com/drugs/DB08907) · **PubChem:** [CID 24812758](https://pubchem.ncbi.nlm.nih.gov/compound/24812758)
- **molar mass:** 444.516 g/mol (C24H25FO5S) — DrugBank
- **groups:** approved, investigational

## About

Canagliflozin is an anti-diabetic medicine used to treat type 2 diabetes mellitus. It is an approved SGLT2 inhibitor and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5030940](https://www.wikidata.org/wiki/Q5030940) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| canagliflozin | parent | 444.516 | C24H25FO5S | DrugBank | [24812758](https://pubchem.ncbi.nlm.nih.gov/compound/24812758) | Elenjickal_2025, Yao_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 22:32 | 10:10 | 1/1/0 | 2/0/1 | 0/0/1 | 209,755/21,047 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 4/3 | 6/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.941). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Yao_2023_reference](drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 6 | Yao X et al., A model-based meta analysis study of so…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12934](https://doi.org/10.1002/psp4.12934) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Elenjickal_2025_reference](drugs/drug_canagliflozin/Canagliflozin_Elenjickal2025_reference.md) | — | 1-compartment (no model) | 3 | Elenjickal EJ et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01571-8](https://doi.org/10.1007/s40262-025-01571-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span> | [Devineni_2015_2_RTG](drugs/drug_canagliflozin/pd_Devineni_2015_2_RTG.md) | renal threshold for glucose ← canagliflozin · direct sigmoid Emax (Hill) effect | — | Devineni D et al., Single- and multiple-dose pharmacokinet…, International journal of cl… (2015) | [10.5414/CP202218](https://doi.org/10.5414/CP202218) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [de_2017_HbA1c](drugs/drug_canagliflozin/pd_de_2017_HbA1c.md) | glycosylated haemoglobin ← canagliflozin · direct Emax (saturable) effect | — | de Winter W et al., Dynamic population pharmacokinetic-phar…, British journal of clinical… (2017) | [10.1111/bcp.13180](https://doi.org/10.1111/bcp.13180) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span> | [Yao_2023_UGEc](drugs/drug_canagliflozin/pd_Yao_2023_UGEc.md) | change of urine glucose excretion (UGE) from baseline normalized by FPG ← canagliflozin · direct Emax (saturable) effect | ▶ model + simulator | Yao X et al., A model-based meta analysis study of so…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12934](https://doi.org/10.1002/psp4.12934) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **UGT1A9** | `Q22` · CL | metabolism | [Golovina_2023](drugs/drug_canagliflozin/pgx_Golovina_2023_UGT1A9_Q22.md) | Golovina EL et al., [Clinical effectiveness and pharmacokin…, Terapevticheskii arkhiv (2023) | [10.26442/00403660.2023.08.202326](https://doi.org/10.26442/00403660.2023.08.202326) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 60 matched, 43 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_11 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Elenjickal_2025.pdf` | Elenjickal EJ et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2025) | popPK | 10 | [10.1007/s40262-025-01571-8](https://doi.org/10.1007/s40262-025-01571-8) | [40952584](https://pubmed.ncbi.nlm.nih.gov/40952584) | The paper reports a population PK model for canagliflozin in humans with specific numeric values for V/F (80.7 L in men, 49.1 L in women) and AUC changes, though other parameters like CL and Ka are described qualitatively or as covariate effects without explicit base values in the text. |
| `Hoeben_2016.pdf` | Hoeben E et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2016) | popPK | 10 | [10.1007/s40262-015-0307-x](https://doi.org/10.1007/s40262-015-0307-x) | [26293616](https://pubmed.ncbi.nlm.nih.gov/26293616) | The paper describes a population PK model for canagliflozin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Devineni_2015.pdf` | Devineni D et al., Clinical Pharmacokinetic, Pharmacodynam…, Clinical pharmacokinetics (2015) | popPK | 8 | [10.1007/s40262-015-0285-z](https://doi.org/10.1007/s40262-015-0285-z) | [26041408](https://pubmed.ncbi.nlm.nih.gov/26041408) | The paper reports key quantitative PK parameters for canagliflozin in humans, including half-life (10.6 and 13.1 h), bioavailability (65%), and excretion percentages, but lacks specific clearance (CL) or volume (V) values. |
| `Devineni_2015_2.pdf` | Devineni D et al., Single- and multiple-dose pharmacokinet…, International journal of cl… (2015) | popPK | 8 | [10.5414/CP202218](https://doi.org/10.5414/CP202218) | [25500487](https://pubmed.ncbi.nlm.nih.gov/25500487) | The study reports PK parameters for canagliflozin in humans, but specific numeric values for clearance, volume, or half-life are not present in the provided text, only qualitative descriptions and PD parameters. |
| `Wang_2021.pdf` | Wang XN et al., Evaluation of influence of telmisartan…, Annals of palliative medici… (2021) | popPK | 8 | [10.21037/apm-21-65](https://doi.org/10.21037/apm-21-65) | [33752434](https://pubmed.ncbi.nlm.nih.gov/33752434) | The study reports quantitative PK parameters for canagliflozin in rats and mice, but the specific numeric values are not present in the provided evidence text. |
| `de_2017.pdf` | de Winter W et al., Dynamic population pharmacokinetic-phar…, British journal of clinical… (2017) | popPK | 8 | [10.1111/bcp.13180](https://doi.org/10.1111/bcp.13180) | [28138980](https://pubmed.ncbi.nlm.nih.gov/28138980) | The paper describes a population PK/PD model for canagliflozin, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided evidence, which focuses on HbA1c efficacy outcomes. |
| `Dunne_2015.pdf` | Dunne A et al., The method of averaging applied to phar…, Journal of pharmacokinetics… (2015) | pd | 5 | [10.1007/s10928-015-9426-0](https://doi.org/10.1007/s10928-015-9426-0) | [26142076](https://www.ncbi.nlm.nih.gov/pubmed/26142076) | metadata signals extractable PD data (indirectresponse) |
| `Chen_2023.pdf` | Chen X et al., Quantitative effects of sodium-glucose…, Expert review of clinical p… (2023) | pd | 4 | [10.1080/17512433.2023.2256224](https://doi.org/10.1080/17512433.2023.2256224) | [37669251](https://www.ncbi.nlm.nih.gov/pubmed/37669251) | metadata signals extractable PD data (Emax) |
| `Francke_2015.pdf` | Francke S et al., In vitro metabolism of canagliflozin in…, Journal of clinical pharmac… (2015) | pgx | 8 | [10.1002/jcph.506](https://doi.org/10.1002/jcph.506) | [25827774](https://www.ncbi.nlm.nih.gov/pubmed/25827774) | metadata signals extractable PGX data (UGT1A9, PK/PD-context) |
| `Mamidi_2017.pdf` | Mamidi RNVS et al., In vitro and physiologically-based phar…, British journal of clinical… (2017) | pgx | 7 | [10.1111/bcp.13186](https://doi.org/10.1111/bcp.13186) | [27862160](https://www.ncbi.nlm.nih.gov/pubmed/27862160) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Pattanawongsa_2015.pdf` | Pattanawongsa A et al., Inhibition of Human UDP-Glucuronosyltra…, Drug metabolism and disposi… (2015) | pgx | 7 | [10.1124/dmd.115.065870](https://doi.org/10.1124/dmd.115.065870) | [26180128](https://www.ncbi.nlm.nih.gov/pubmed/26180128) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |

<sub>queue written 2026-10-04T22:23:59.138771+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Amblee_2014 | not_relevant | 0 | 0 | The paper is a review discussing pharmacogenomics in T2DM generally and mentions canagliflozin only in the context of clinical profiling, without reporting any specific gene variant effects on canagliflozin PK or PD parameters. |
| popPK | Ashry_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology investigation in rabbits focusing on lipid profiles and vascular function, with no pharmacokinetic parameters reported. |
| PD | Ashry_2021 | not_relevant | 1 | 0 | The study is a comparative animal trial (Control vs HCD vs HCD+Canagliflozin) reporting group-level mean differences in biomarkers and vascular function, not a concentration- or dose-response analysis with numeric PD parameters (e.g., EC50, Emax vs concentration). |
| popPK | Bakris_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety analysis of canagliflozin in patients with chronic kidney disease and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| popPK | Banerjee_2023 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical outcomes (gout risk) and does not report pharmacokinetic parameters for canagliflozin. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PD | Chen_2023 | not_relevant | 0 | 0 | The provided text is only the title of a study and does not contain the full text, data, or any numeric PD parameters required to assess an exposure-response relationship. |
| PD | Devineni_2015 | not_relevant | 3 | 1 | The text provides a qualitative description of dose-dependent effects (RTG, UGE) and mentions near-maximal effects at specific doses, but it does not report numeric PD parameters (Emax, EC50) or an explicit concentration-effect curve in the provided text. |
| popPK | Devineni_2015_2 | relevant | 8 | 2 | The study reports PK parameters for canagliflozin in humans, but specific numeric values for clearance, volume, or half-life are not present in the provided text, only qualitative descriptions and PD parameters. |
| popPK | Dunne_2015 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | Dunne_2015 | not_relevant | 0 | 0 | The paper describes a statistical method for averaging PK/PD models and does not report specific pharmacodynamic data or numeric PD parameters for canagliflozin. |
| PGx | Eden_2025 | not_relevant | 2 | 0 | The paper is a systematic review that mentions genetic polymorphism as a focus area but the provided text only reports effects of renal impairment and drug interactions, with no specific data or fitted effect sizes for gene variants. |
| PGx | Golovina_2023 | not_relevant | 5 | 2 | The paper is a review that mentions a small Phase 1 study showing higher plasma levels of canagliflozin in UGT2B4*2 carriers, but it does not provide specific quantitative effect sizes or fitted parameters for canagliflozin. |
| popPK | Hoeben_2016 | relevant | 10 | 0 | The paper describes a population PK model for canagliflozin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| PGx | Kaur_2021 | not_relevant | 2 | 1 | The text is an abstract of a review article that discusses pharmacogenomics in general terms but does not report specific quantitative pharmacogenomic effects on PK/PD parameters for canagliflozin. |
| PGx | Lapham_2024 | not_relevant | 0 | 0 | The paper uses canagliflozin as a probe substrate to identify a UGT2B4 inhibitor (clotrimazole) and does not report any pharmacogenomic effects of gene variants on canagliflozin PK/PD. |
| PGx | Liu_2023 | not_relevant | 0 | 0 | The paper focuses on analytical chemistry methods for detecting crystal form impurities in tablets, not on pharmacogenomics or genetic effects on PK/PD. |
| PGx | Mamidi_2017 | not_relevant | 0 | 0 | The paper assesses drug-drug interaction potential using in vitro and PBPK models, but does not report any pharmacogenomic effects (gene variants) on canagliflozin PK/PD. |
| popPK | Moedt_2026 | irrelevant | 0 | 0 | The study analyzes urinary EGF biomarkers and kidney outcomes, not the pharmacokinetic disposition parameters (CL, V, ka) of canagliflozin. |
| PGx | Montasser_2026 | not_relevant | 2 | 0 | The paper reports the study design and overall pharmacodynamic responses (e.g., glucosuria, bone markers) but does not report specific gene variant effects on PK/PD parameters. |
| PGx | Pattanawongsa_2015 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions via UGT enzyme inhibition, not the effect of genetic variants on canagliflozin pharmacokinetics or pharmacodynamics. |
| PGx | Qin_2019 | not_relevant | 0 | 0 | The paper investigates AhR activation and carcinogenic risk thresholds, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Sato_2024 | irrelevant | 0 | 0 | The study is a pharmacodynamic model-based meta-analysis of HbA1c reduction and does not report quantitative pharmacokinetic disposition parameters (CL, V, ka) for canagliflozin. |
| popPK | Song_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of janagliflozin, with canagliflozin used only as a comparator for efficacy levels. |
| PD | Song_2020 | not_relevant | 2 | 1 | The paper focuses on predicting PK/PD for janagliflozin using canagliflozin only as a reference for defining a qualitative efficacy threshold (25-30% UGE), without reporting specific numeric PD parameters (e.g., IC50, Emax) for canagliflozin itself. |
| popPK | Suzuki_2022 | irrelevant | 0 | 0 | The study reports clinical kidney outcomes (eGFR decline) rather than pharmacokinetic parameters for canagliflozin. |
| PGx | Taylor_2023 | not_relevant | 2 | 0 | The paper describes a pilot study validating pharmacodynamic biomarkers and sex differences but does not report results or associations for the genetic variants (SLC5A4, SLC5A9, SLC2A9) mentioned in the aim. |
| PGx | Taylor_2023_2 | not_relevant | 2 | 2 | The paper is a pilot study validating pharmacodynamic endpoints and normalization methods; it does not report significant associations between the tested genetic variants and pharmacokinetic or pharmacodynamic parameters. |
| popPK | Wang_2021 | relevant | 8 | 2 | The study reports quantitative PK parameters for canagliflozin in rats and mice, but the specific numeric values are not present in the provided evidence text. |
| popPK | Wang_2024 | irrelevant | 2 | 0 | The paper is a model-based meta-analysis primarily focused on SGLT2 inhibitors in heart failure, and while it includes canagliflozin PK data in a table, the specific quantitative PK parameter values (CL, V, etc.) are not present in the provided evidence, only study characteristics and references to figures. |
| popPK | de_2017 | relevant | 8 | 0 | The paper describes a population PK/PD model for canagliflozin, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided evidence, which focuses on HbA1c efficacy outcomes. |
| popPK | van_2023 | irrelevant | 0 | 0 | The paper is a clinical outcome analysis of renal function (eGFR slope) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 22:24 UTC</sub>
