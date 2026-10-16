<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;dolasetron&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dolasetron_Dow1996_reference&quot;,&quot;label&quot;:&quot;Dow_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dolasetron/Dolasetron_Dow1996_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# dolasetron

- **generic name:** dolasetron
- **ATC codes:** `A04AA04`
- **DrugBank:** [DB00757](https://go.drugbank.com/drugs/DB00757) · **PubChem:** [CID 3033818](https://pubchem.ncbi.nlm.nih.gov/compound/3033818)
- **molar mass:** 324.38 g/mol (C19H20N2O3) — DrugBank
- **groups:** approved

## About

Dolasetron is an antiemetic used to treat vomiting. It is an approved 5HT3 antagonist antiemetic, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1829318](https://www.wikidata.org/wiki/Q1829318) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:54 | 4:09 | 0/1/0 | 3/0/0 | 0/0/3 | 111,821/6,913 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 1/10 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub><br><sub>route_to: `engineer`</sub> | [Dow_1996_reference](drugs/drug_dolasetron/Dolasetron_Dow1996_reference.md) | ▶ model + simulator | 1-compartment, oral | 8 | Dow J et al., Comparison of the pharmacokinetics of d…, Journal of pharmaceutical s… (1996) | [10.1021/js960041m](https://doi.org/10.1021/js960041m) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Darpo_2018_J_Tpeak_c](drugs/drug_dolasetron/pd_Darpo_2018_J_Tpeak_c.md) | corrected J-Tpeak (J-Tpeak_c) ← dolasetron · model not identified | — | Darpo B et al., Challenges in implementing and obtainin…, Journal of pharmacological… (2018) | [10.1016/j.vascn.2018.05.006](https://doi.org/10.1016/j.vascn.2018.05.006) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.00).">in vitro</span> | [George_2021_ASP_uptake](drugs/drug_dolasetron/pd_George_2021_ASP_uptake.md) | ASP+ uptake by OCT2 ← dolasetron · direct Emax (saturable) effect | — | George B et al., In Vitro Inhibition of Renal OCT2 and M…, International journal of mo… (2021) | [10.3390/ijms22126439](https://doi.org/10.3390/ijms22126439) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.00).">in vitro</span> | [George_2021_ASP_uptake_2](drugs/drug_dolasetron/pd_George_2021_ASP_uptake_2.md) | ASP+ uptake by MATE1 ← dolasetron · direct Emax (saturable) effect | — | George B et al., In Vitro Inhibition of Renal OCT2 and M…, International journal of mo… (2021) | [10.3390/ijms22126439](https://doi.org/10.3390/ijms22126439) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span> | [Komatsu_2019_QTca](drugs/drug_dolasetron/pd_Komatsu_2019_QTca.md) | vehicle-adjusted change in QTca from baseline ← dolasetron · direct linear effect | — | Komatsu R et al., Exposure-response analysis of drug-indu…, Journal of pharmacological… (2019) | [10.1016/j.vascn.2019.106606](https://doi.org/10.1016/j.vascn.2019.106606) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Adams_2009](drugs/drug_dolasetron/pgx_Adams_2009_CYP2D6_Q100.md) | Adams LM et al., Effect of casopitant, a novel NK-1 anta…, Supportive care in cancer :… (2009) | [10.1007/s00520-008-0572-4](https://doi.org/10.1007/s00520-008-0572-4) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Moore_2025](drugs/drug_dolasetron/pgx_Moore_2025_CYP2D6_Q100.md) | Moore C et al., CYP2D6 genotype and associated 5-HT3 re…, Clinical and translational… (2025) | [10.1111/cts.70108](https://doi.org/10.1111/cts.70108) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **CYP2D6** | `Q22` · CL | metabolism | [Moore_2026](drugs/drug_dolasetron/pgx_Moore_2026_CYP2D6_Q22.md) | Moore C et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70291](https://doi.org/10.1002/cpt.70291) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dolasetron).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `CYP2D6` metabolism/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: HTR3A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 87 matched, 74 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_16 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boxenbaum_1992.pdf` | Boxenbaum H et al., Human dolasetron pharmacokinetics: I. D…, Biopharmaceutics & drug dis… (1992) | popPK | 10 | [10.1002/bdd.2510130907](https://doi.org/10.1002/bdd.2510130907) | [1467456](https://pubmed.ncbi.nlm.nih.gov/1467456) | The study reports quantitative PK parameters for dolasetron and its metabolite in humans, including specific values for the metabolite's half-life and renal clearance, though parent drug clearance/volume values are not explicitly listed in the provided text. |
| `Dempsey_1996.pdf` | Dempsey E et al., Pharmacokinetics of single intravenous…, Journal of clinical pharmac… (1996) | popPK | 10 | [10.1002/j.1552-4604.1996.tb04757.x](https://doi.org/10.1002/j.1552-4604.1996.tb04757.x) | [8930777](https://pubmed.ncbi.nlm.nih.gov/8930777) | The study reports quantitative pharmacokinetic parameters (half-life, volume of distribution, bioavailability) for dolasetron and its reduced metabolite in healthy elderly volunteers. |
| `Dow_1996.pdf` | Dow J et al., Comparison of the pharmacokinetics of d…, Journal of pharmaceutical s… (1996) | popPK | 10 | [10.1021/js960041m](https://doi.org/10.1021/js960041m) | [8818990](https://pubmed.ncbi.nlm.nih.gov/8818990) | The study reports quantitative pharmacokinetic parameters (clearance, volume, half-life, absorption rate) for dolasetron and its active metabolite in dogs. |
| `Shah_1996.pdf` | Shah A et al., Single- and Multiple-Dose Pharmacokinet…, American journal of therape… (1996) | popPK | 10 | [10.1097/00045391-199605000-00006](https://doi.org/10.1097/00045391-199605000-00006) | [11862273](https://pubmed.ncbi.nlm.nih.gov/11862273) | The study reports quantitative pharmacokinetic parameters (clearance, half-life) for the active reduced metabolite of dolasetron, which is explicitly stated to be the subject of the PK analysis because the parent compound was not measurable. |
| `Sanwald-Ducray_1997.pdf` | Sanwald-Ducray P et al., Prediction of the pharmacokinetic param…, Xenobiotica; the fate of fo… (1997) | popPK | 9 | [10.1080/004982597240686](https://doi.org/10.1080/004982597240686) | [9058532](https://pubmed.ncbi.nlm.nih.gov/9058532) | The paper reports quantitative pharmacokinetic parameters (clearance, half-life, volume of distribution) for reduced dolasetron (the major active metabolite of dolasetron) in humans, with specific numeric values provided in the abstract. |
| `Stubbs_1997.pdf` | Stubbs K et al., Pharmacokinetics of dolasetron after or…, Journal of clinical pharmac… (1997) | popPK | 9 | [10.1002/j.1552-4604.1997.tb04267.x](https://doi.org/10.1002/j.1552-4604.1997.tb04267.x) | [9505984](https://pubmed.ncbi.nlm.nih.gov/9505984) | The study reports quantitative PK parameters (half-life, clearance changes) for dolasetron and its metabolite in humans, but specific numeric values for clearance and volume are not fully listed in the provided abstract text. |
| `Coppes_1999.pdf` | Coppes MJ et al., Safety, tolerability, antiemetic effica…, Journal of pediatric hemato… (1999) | popPK | 8 | [10.1097/00043426-199907000-00007](https://doi.org/10.1097/00043426-199907000-00007) | [10445889](https://pubmed.ncbi.nlm.nih.gov/10445889) | The study reports pharmacokinetic parameters for the active metabolite of dolasetron (MDL 74,156), including half-life and qualitative clearance trends, but specific numeric values for clearance or volume are not explicitly listed in the provided text. |
| `Herndon_2018.pdf` | Herndon AK et al., Preliminary pharmacokinetics of intrave…, Journal of feline medicine… (2018) | popPK | 8 | [10.1177/1098612X17729310](https://doi.org/10.1177/1098612X17729310) | [28905667](https://pubmed.ncbi.nlm.nih.gov/28905667) | The study reports quantitative non-compartmental PK parameters (Cmax, Tmax, half-life, AUC) for hydrodolasetron, the active metabolite of dolasetron, in cats. |
| `Hunt_1996.pdf` | Hunt TL et al., Multiple-dose, placebo-controlled, phas…, Pharmacotherapy (1996) | popPK | 8 | not captured | [8820469](https://pubmed.ncbi.nlm.nih.gov/8820469) | The study reports pharmacokinetics of the reduced metabolite of dolasetron, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| `Darpo_2015.pdf` | Darpo B et al., Results from the IQ-CSRC prospective st…, Clinical pharmacology and t… (2015) | pd | 5 | [10.1002/cpt.60](https://doi.org/10.1002/cpt.60) | [25670536](https://www.ncbi.nlm.nih.gov/pubmed/25670536) | metadata signals extractable PD data (exposure-response) |
| `Darpo_2018.pdf` | Darpo B et al., Challenges in implementing and obtainin…, Journal of pharmacological… (2018) | pd | 5 | [10.1016/j.vascn.2018.05.006](https://doi.org/10.1016/j.vascn.2018.05.006) | [29879475](https://www.ncbi.nlm.nih.gov/pubmed/29879475) | metadata signals extractable PD data (concentration-effect) |
| `Ferber_2017.pdf` | Ferber G et al., Can Bias Evaluation Provide Protection…, Journal of clinical pharmac… (2017) | pd | 5 | [10.1002/jcph.779](https://doi.org/10.1002/jcph.779) | [27271102](https://www.ncbi.nlm.nih.gov/pubmed/27271102) | metadata signals extractable PD data (Exposure-Response) |
| `Hassan_2011.pdf` | Hassan BA et al., Genetic polymorphisms in the three mala…, Asian Pacific journal of ca… (2011) | pgx | 8 | not captured | [21517255](https://www.ncbi.nlm.nih.gov/pubmed/21517255) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Zhou_2009.pdf` | Zhou SF, Polymorphism of human cytochrome P450 2…, Clinical pharmacokinetics (2009) | pgx | 8 | [10.2165/11318070-000000000-00000](https://doi.org/10.2165/11318070-000000000-00000) | [19902987](https://www.ncbi.nlm.nih.gov/pubmed/19902987) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Janicki_2005.pdf` | Janicki PK, Cytochrome P450 2D6 metabolism and 5-hy…, Medical science monitor : i… (2005) | pgx | 5 | not captured | [16192915](https://www.ncbi.nlm.nih.gov/pubmed/16192915) | metadata signals extractable PGX data (CYP2D6) |
| `Janicki_2006.pdf` | Janicki PK et al., Prevention of postoperative nausea and…, Anesthesia and analgesia (2006) | pgx | 5 | [10.1213/01.ane.0000200364.55798.3f](https://doi.org/10.1213/01.ane.0000200364.55798.3f) | [16551910](https://www.ncbi.nlm.nih.gov/pubmed/16551910) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-04T13:51:29.298231+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aapro_2005 | irrelevant | 0 | 0 | This is a review article discussing dosing issues for 5-HT3 receptor antagonists and does not report original quantitative pharmacokinetic parameters for dolasetron. |
| PGx | Adams_2009 | not_relevant | 2 | 8 | The study investigates a drug-drug interaction (casopitant) on PK parameters, stratified by CYP2D6 genotype, but does not report the pharmacogenomic effect of the genotype itself on the drug's PK/PD. |
| popPK | Akabane_2012 | irrelevant | 1 | 0 | The study is an in-vitro comparison of intrinsic clearance in hepatocytes, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for dolasetron in a biological system. |
| popPK | Bolton_2006 | irrelevant | 0 | 0 | This is a systematic review and meta-analysis of clinical efficacy (postoperative vomiting) for dolasetron, not a pharmacokinetic study, and it reports no disposition parameters. |
| PD | Bolton_2006 | not_relevant | 2 | 1 | The paper is a meta-analysis reporting summary odds ratios for efficacy, not a pharmacodynamic model or dose-response curve with numeric PD parameters (e.g., EC50, Emax) for dolasetron. |
| PGx | Boušová_2015 | not_relevant | 0 | 0 | The paper reviews the modulation of CBR1 by polyphenols and mentions dolasetron as a substrate, but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PD | Boxenbaum_1992 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (half-life, clearance, AUC) and makes a qualitative statement about the metabolite's potential role in pharmacodynamic activity, but provides no numeric PD parameters or exposure-response data. |
| PD | Constenla_2004 | not_relevant | 1 | 0 | The paper is a narrative review of clinical efficacy and does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves for dolasetron. |
| popPK | Coppes_1999 | relevant | 8 | 3 | The study reports pharmacokinetic parameters for the active metabolite of dolasetron (MDL 74,156), including half-life and qualitative clearance trends, but specific numeric values for clearance or volume are not explicitly listed in the provided text. |
| PD | Darpo_2015 | not_relevant | 4 | 2 | The text mentions a significant positive slope for dolasetron but does not provide the specific numeric value of the slope or other PD parameters (like Emax/EC50) in the provided excerpt. |
| popPK | Fauser_1996 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing anti-emetic outcomes and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Felt_2024 | irrelevant | 0 | 0 | The paper describes structural biology (cryo-EM) and molecular dynamics of 5-HT3A receptors, not pharmacokinetic parameters for dolasetron. |
| PD | Felt_2024 | not_relevant | 0 | 0 | The paper is a structural biology study (cryo-EM) of 5-HT3A receptors and does not report pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for dolasetron. |
| popPK | Ferber_2017 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| PD | Ferber_2017 | not_relevant | 0 | 0 | The provided text is only the title of a paper regarding methodology for QT studies and does not contain the full text or any specific data, models, or numeric PD parameters for dolasetron. |
| popPK | Gan_2005 | irrelevant | 2 | 0 | This is a review article discussing pharmacological profiles and mechanisms without providing original quantitative pharmacokinetic parameter values for dolasetron. |
| popPK | Gilmore_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for netupitant and palonosetron, not dolasetron. |
| PD | Gilmore_2019 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetic profiles of netupitant and palonosetron to support their combination; it does not report any pharmacodynamic, exposure-response, or dose-response data for dolasetron or any other drug. |
| popPK | Grote_1997 | irrelevant | 0 | 0 | The study is a clinical efficacy trial assessing antiemetic response and safety, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Hassan_2011 | not_relevant | 0 | 0 | The paper focuses on granisetron and genetic polymorphisms, mentioning dolasetron only as a qualitative alternative in the conclusion without providing any PK/PD data or numeric parameters. |
| PGx | Hassan_2011 | not_relevant | 0 | 0 | The study investigates the pharmacogenomics of granisetron, not dolasetron. |
| PD | Herndon_2018 | not_relevant | 2 | 1 | The study reports a lack of significant difference in emetic events between dose groups and saline, providing no numeric PD parameters (e.g., Emax, EC50) or concentration-effect relationship. |
| PGx | Ho_2006 | not_relevant | 2 | 0 | The text is a review summary that mentions pharmacogenetic factors (CYP450, ABCB1, 5-HT3) generally but does not report specific quantitative effects of variants on dolasetron PK/PD parameters. |
| PGx | Hsu_2010 | not_relevant | 0 | 0 | The paper is a general review of antiemetics that mentions dolasetron is subject to CYP2D6 polymorphism but does not report specific pharmacogenomic effects on PK or PD parameters. |
| popPK | Hunt_1996 | relevant | 8 | 0 | The study reports pharmacokinetics of the reduced metabolite of dolasetron, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| PD | Hunt_1996 | not_relevant | 0 | 0 | The study is a Phase I PK/safety trial that explicitly states no dose-response relationship was apparent for adverse events and does not report any numeric PD parameters or concentration-effect analysis. |
| PGx | Janicki_2005 | not_relevant | 5 | 0 | The text is a qualitative review discussing the mechanism of CYP2D6 polymorphism affecting dolasetron efficacy, but it does not report specific quantitative PK/PD parameter changes or fitted effect sizes. |
| popPK | Kazemi-Kjellberg_2001 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy for postoperative nausea and vomiting, reporting no pharmacokinetic parameters for dolasetron. |
| PD | Kazemi-Kjellberg_2001 | not_relevant | 2 | 1 | The paper is a systematic review that qualitatively concludes there is "little evidence of dose-responsiveness" for dolasetron, providing no numeric PD parameters or extractable concentration-effect curves. |
| popPK | Komatsu_2019 | irrelevant | 0 | 0 | The study focuses on QT interval prolongation and exposure-response analysis in monkeys, not on the pharmacokinetic disposition parameters (CL, V, etc.) of dolasetron. |
| PGx | Li_2006 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (aprepitant) and confirms no effect on PK, rather than reporting a pharmacogenomic effect size for the drug. |
| PGx | Moore_2026 | not_relevant | 5 | 2 | The paper is a clinical guideline summarizing evidence for CYP2D6 and 5-HT3 antagonists, but it does not report original quantitative pharmacokinetic or pharmacodynamic data for dolasetron. |
| popPK | Ouassaf_2026 | irrelevant | 0 | 0 | The paper describes a machine learning framework for predicting drug-drug interactions and does not report any pharmacokinetic parameters for dolasetron. |
| PD | Ouassaf_2026 | not_relevant | 0 | 0 | The paper describes a machine learning framework for classifying drug-drug interactions and does not report any pharmacodynamic or exposure-response data for dolasetron. |
| popPK | Roila_1997 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy and safety of 5-HT3 antagonists and does not report quantitative pharmacokinetic parameters for dolasetron. |
| PD | Roila_1997 | not_relevant | 1 | 0 | The text is a qualitative review comparing clinical efficacy and safety, mentioning dose-response curves in general terms but providing no numeric PD parameters or extractable concentration-effect data for dolasetron. |
| popPK | Rubenstein_1997 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for antiemetic response and does not report pharmacokinetic parameters such as clearance or volume. |
| PGx | Rubenstein_2006 | not_relevant | 0 | 0 | The paper is a general review of antiemetics and mentions pharmacogenomics only as a future direction without reporting specific gene-drug interactions or PK/PD data for dolasetron. |
| PD | Rüsch_2002 | not_relevant | 0 | 0 | The paper is a clinical trial comparing fixed-dose antiemetic regimens and reports only incidence rates of nausea/vomiting, without any concentration-effect analysis, PK/PD modeling, or numeric PD parameters for dolasetron. |
| PGx | Sanwald_1996 | not_relevant | 0 | 0 | The paper characterizes in vitro CYP450 enzymes involved in dolasetron metabolism but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Sanwald_1996_2 | not_relevant | 2 | 5 | The paper reports in vitro metabolic involvement of CYP2D6 but does not report a pharmacogenomic effect (genotype-based) on a specific PK or PD parameter in humans. |
| popPK | Schärfe_2017 | irrelevant | 0 | 0 | The paper is a pharmacogenomic analysis of genetic variation in drug-related genes and does not report pharmacokinetic parameters for dolasetron. |
| PD | Schärfe_2017 | not_relevant | 0 | 0 | The paper is a computational pharmacogenomics study analyzing genetic variants in drug targets; it does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for dolasetron or any other drug. |
| popPK | Stubbs_1997 | relevant | 9 | 4 | The study reports quantitative PK parameters (half-life, clearance changes) for dolasetron and its metabolite in humans, but specific numeric values for clearance and volume are not fully listed in the provided abstract text. |
| popPK | Warriner_1997 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for postoperative nausea and vomiting prevention and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | This is a network meta-analysis of clinical efficacy for postoperative nausea and vomiting, not a pharmacokinetic study, and it reports no disposition parameters for dolasetron. |
| PD | Weibel_2020 | not_relevant | 1 | 0 | The paper is a network meta-analysis comparing efficacy and safety of antiemetics; it reports risk ratios for clinical outcomes (vomiting) but does not provide pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50) for dolasetron. |
| popPK | Zhou_2009 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PD | Zhou_2009 | not_relevant | 0 | 0 | The paper is a review of CYP2D6 polymorphisms and does not report specific pharmacodynamic or exposure-response data for dolasetron. |
| PGx | Zhou_2009 | not_relevant | 0 | 0 | The paper discusses CYP2D6 polymorphisms generally but does not report specific pharmacokinetic or pharmacodynamic effects for dolasetron. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 13:51 UTC</sub>
