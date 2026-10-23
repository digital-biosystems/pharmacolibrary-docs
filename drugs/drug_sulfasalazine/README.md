<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;sulfasalazine&quot;}]"></div>

# sulfasalazine

- **generic name:** sulfasalazine
- **ATC codes:** `A07EC01`
- **DrugBank:** [DB00795](https://go.drugbank.com/drugs/DB00795) · **PubChem:** [CID 5359476](https://pubchem.ncbi.nlm.nih.gov/compound/5359476)
- **molar mass:** 398.393 g/mol (C18H14N4O5S) — DrugBank
- **groups:** approved, investigational

## About

Sulfasalazine is an intestinal anti-inflammatory drug used to treat ulcerative colitis and rheumatic conditions such as rheumatoid arthritis, including juvenile forms. It is an approved medicine and is included on the WHO list of essential medicines, so it remains in widespread use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420035](https://www.wikidata.org/wiki/Q420035) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **BCRP** | `Q19` · AUCt | transport | [Gotanda_2016](drugs/drug_sulfasalazine/pgx_Gotanda_2016_BCRP_Q19.md) | Gotanda K et al., Circulating intestine-derived exosomal…, Scientific reports (2016) | [10.1038/srep32299](https://doi.org/10.1038/srep32299) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **BCRP** | `Q88` · AUC | transport | [Hirota_2018](drugs/drug_sulfasalazine/pgx_Hirota_2018_BCRP_Q88.md) | Hirota T, [Epigenetic Regulation of Pharmacokinet…, Yakugaku zasshi : Journal o… (2018) | [10.1248/yakushi.18-00145](https://doi.org/10.1248/yakushi.18-00145) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **NAT2** | `Q305` · kfm | metabolism | [Kita_2001](drugs/drug_sulfasalazine/pgx_Kita_2001_NAT2_Q305.md) | Kita T et al., N-Acetyltransferase 2 genotype correlat…, Biological & pharmaceutical… (2001) | [10.1248/bpb.24.1176](https://doi.org/10.1248/bpb.24.1176) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **NAT2** | `Q27` · CL/F | metabolism | [Tanigawara_2002](drugs/drug_sulfasalazine/pgx_Tanigawara_2002_NAT2_Q27.md) | Tanigawara Y et al., N-acetyltransferase 2 genotype-related…, Biological & pharmaceutical… (2002) | [10.1248/bpb.25.1058](https://doi.org/10.1248/bpb.25.1058) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 20:16 | 7:19 | 0/0/0 | 0/0/0 | 0/0/4 | 221,139/10,194 | ollama / qwen3.8:27b-mtp-q8_0 | 30 | 10/41 | 22/0 | 0 |

## Coverage

- **PubMed hits:** 188 matched, 144 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_23 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yamasaki_2008.pdf` | Yamasaki Y et al., Pharmacogenetic characterization of sul…, Clinical pharmacology and t… (2008) | popPK | 10 | [10.1038/sj.clpt.6100459](https://doi.org/10.1038/sj.clpt.6100459) | [18167504](https://pubmed.ncbi.nlm.nih.gov/18167504) | The study reports population PK modeling of sulfasalazine in humans, but specific numeric parameter values (CL, V, ka) are not listed in the provided text, only AUC summary statistics. |
| `Kang_2024.pdf` | Kang MJ et al., Interactions of bosutinib with drug tra…, Biomedicine & pharmacothera… (2024) | pd | 5 | [10.1016/j.biopha.2024.117114](https://doi.org/10.1016/j.biopha.2024.117114) | [39053425](https://www.ncbi.nlm.nih.gov/pubmed/39053425) | metadata signals extractable PD data (IC50) |
| `Sáfár_2021.pdf` | Sáfár Z et al., Inhibition of ABCG2/BCRP-mediated trans…, European journal of pharmac… (2021) | pd | 5 | [10.1016/j.ejps.2020.105593](https://doi.org/10.1016/j.ejps.2020.105593) | [33059043](https://www.ncbi.nlm.nih.gov/pubmed/33059043) | metadata signals extractable PD data (IC50) |
| `Taniguchi_2019.pdf` | Taniguchi T et al., Pharmacological Evaluation of Dotinurad…, The Journal of pharmacology… (2019) | pd | 5 | [10.1124/jpet.119.259341](https://doi.org/10.1124/jpet.119.259341) | [31371478](https://www.ncbi.nlm.nih.gov/pubmed/31371478) | metadata signals extractable PD data (IC50) |
| `Bach_1985.pdf` | Bach MK et al., Inhibition by sulfasalazine of LTC synt…, Biochemical pharmacology (1985) | pd | 4 | [10.1016/0006-2952(85)90570-2](https://doi.org/10.1016/0006-2952(85)90570-2) | [2861822](https://www.ncbi.nlm.nih.gov/pubmed/2861822) | metadata signals extractable PD data (EC50) |
| `Grisham_1994.pdf` | Grisham MB et al., Effects of aminosalicylates and immunos…, Biochemical pharmacology (1994) | pd | 4 | [10.1016/0006-2952(94)90320-4](https://doi.org/10.1016/0006-2952(94)90320-4) | [8204107](https://www.ncbi.nlm.nih.gov/pubmed/8204107) | metadata signals extractable PD data (IC50) |
| `Meyers_1987.pdf` | Meyers S et al., Olsalazine sodium in the treatment of u…, Gastroenterology (1987) | pd | 4 | [10.1016/0016-5085(87)90253-8](https://doi.org/10.1016/0016-5085(87)90253-8) | [2890550](https://www.ncbi.nlm.nih.gov/pubmed/2890550) | metadata signals extractable PD data (sigmoid) |
| `Nielsen_1988.pdf` | Nielsen ST et al., Sulfasalazine and 5-aminosalicylic acid…, Scandinavian journal of gas… (1988) | pd | 4 | [10.3109/00365528809093864](https://doi.org/10.3109/00365528809093864) | [2898806](https://www.ncbi.nlm.nih.gov/pubmed/2898806) | metadata signals extractable PD data (IC50) |
| `Scheurlen_1993.pdf` | Scheurlen C et al., Effect of olsalazine and mesalazine on…, The Clinical investigator (1993) | pd | 4 | [10.1007/BF00184728](https://doi.org/10.1007/BF00184728) | [8386034](https://www.ncbi.nlm.nih.gov/pubmed/8386034) | metadata signals extractable PD data (IC50) |
| `Hein_2021.pdf` | Hein DW et al., Arylamine N-acetyltransferase acetylati…, Expert opinion on drug meta… (2021) | pgx | 8 | [10.1080/17425255.2021.1840551](https://doi.org/10.1080/17425255.2021.1840551) | [33094670](https://www.ncbi.nlm.nih.gov/pubmed/33094670) | metadata signals extractable PGX data (NAT2, PK/PD-context) |
| `Kashihara_2017.pdf` | Kashihara Y et al., Small-Dosing Clinical Study: Pharmacoki…, Journal of pharmaceutical s… (2017) | pgx | 8 | [10.1016/j.xphs.2017.03.010](https://doi.org/10.1016/j.xphs.2017.03.010) | [28322941](https://www.ncbi.nlm.nih.gov/pubmed/28322941) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |
| `Kuhn_2010.pdf` | Kuhn UD et al., Phenotyping with sulfasalazine - time d…, International journal of cl… (2010) | pgx | 8 | [10.5414/cpp48001](https://doi.org/10.5414/cpp48001) | [20040334](https://www.ncbi.nlm.nih.gov/pubmed/20040334) | metadata signals extractable PGX data (NAT2, PK/PD-context) |
| `Kumagai_2004.pdf` | Kumagai S et al., N-acetyltransferase 2 genotype-related…, Pharmaceutical research (2004) | pgx | 8 | [10.1023/b:pham.0000016246.84974.ec](https://doi.org/10.1023/b:pham.0000016246.84974.ec) | [15032315](https://www.ncbi.nlm.nih.gov/pubmed/15032315) | metadata signals extractable PGX data (NAT2, PK/PD-context) |
| `Lee_2015.pdf` | Lee CA et al., Breast cancer resistance protein (ABCG2…, Drug metabolism and disposi… (2015) | pgx | 8 | [10.1124/dmd.114.062174](https://doi.org/10.1124/dmd.114.062174) | [25587128](https://www.ncbi.nlm.nih.gov/pubmed/25587128) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |
| `Lennard_1998.pdf` | Lennard L, Clinical implications of thiopurine met…, Therapeutic drug monitoring (1998) | pgx | 8 | [10.1097/00007691-199810000-00014](https://doi.org/10.1097/00007691-199810000-00014) | [9780130](https://www.ncbi.nlm.nih.gov/pubmed/9780130) | metadata signals extractable PGX data (TPMT, PK/PD-context) |
| `Ma_2009.pdf` | Ma JJ et al., Effects of NAT2 polymorphism on SASP ph…, Clinica chimica acta; inter… (2009) | pgx | 8 | [10.1016/j.cca.2009.06.025](https://doi.org/10.1016/j.cca.2009.06.025) | [19560446](https://www.ncbi.nlm.nih.gov/pubmed/19560446) | metadata signals extractable PGX data (NAT2, PK/PD-context) |
| `Mikus_1997.pdf` | Mikus G et al., Effect of codeine on gastrointestinal m…, Clinical pharmacology and t… (1997) | pgx | 8 | [10.1016/S0009-9236(97)90196-X](https://doi.org/10.1016/S0009-9236(97)90196-X) | [9129563](https://www.ncbi.nlm.nih.gov/pubmed/9129563) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Urquhart_2008.pdf` | Urquhart BL et al., Breast cancer resistance protein (ABCG2…, Pharmacogenetics and genomi… (2008) | pgx | 8 | [10.1097/FPC.0b013e3282f974dc](https://doi.org/10.1097/FPC.0b013e3282f974dc) | [18408567](https://www.ncbi.nlm.nih.gov/pubmed/18408567) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |
| `Gotanda_2015.pdf` | Gotanda K et al., Sulfasalazine disposition in a subject…, British journal of clinical… (2015) | pgx | 5 | [10.1111/bcp.12654](https://doi.org/10.1111/bcp.12654) | [25872459](https://www.ncbi.nlm.nih.gov/pubmed/25872459) | metadata signals extractable PGX data (ABCG2) |
| `James_2008.pdf` | James HM et al., Common polymorphisms in the folate path…, The Journal of rheumatology (2008) | pgx | 5 | not captured | [18322994](https://www.ncbi.nlm.nih.gov/pubmed/18322994) | metadata signals extractable PGX data (SLC19A1) |
| `Michiba_2025.pdf` | Michiba K et al., Characterization of intestinal transpor…, Drug metabolism and disposi… (2025) | pgx | 5 | [10.1016/j.dmd.2025.100075](https://doi.org/10.1016/j.dmd.2025.100075) | [40319556](https://www.ncbi.nlm.nih.gov/pubmed/40319556) | metadata signals extractable PGX data (SLC46A1) |
| `Pierik_2006.pdf` | Pierik M et al., Pharmacogenetics in inflammatory bowel…, World journal of gastroente… (2006) | pgx | 5 | [10.3748/wjg.v12.i23.3657](https://doi.org/10.3748/wjg.v12.i23.3657) | [16773681](https://www.ncbi.nlm.nih.gov/pubmed/16773681) | metadata signals extractable PGX data (TPMT) |
| `Sabbagh_1997.pdf` | Sabbagh N et al., NAT2 genotyping and efficacy of sulfasa…, Pharmacogenetics (1997) | pgx | 5 | [10.1097/00008571-199704000-00006](https://doi.org/10.1097/00008571-199704000-00006) | [9170150](https://www.ncbi.nlm.nih.gov/pubmed/9170150) | metadata signals extractable PGX data (NAT2) |

<sub>queue written 2026-10-04T20:11:41.887765+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abbasi_2019 | not_relevant | 0 | 0 | The paper is a general review of rheumatoid arthritis treatment strategies and does not report any pharmacogenomic effects on sulfasalazine PK or PD parameters. |
| PGx | Abramova_2020 | not_relevant | 0 | 0 | The study examines the risk of hemolytic anemia (a safety/adverse event) in G6PD-deficient patients, not the pharmacokinetic or pharmacodynamic parameters of sulfasalazine. |
| PGx | Adkison_2010 | not_relevant | 5 | 10 | The study reports no significant pharmacokinetic differences between ABCG2 genotypes for sulfasalazine. |
| popPK | Allgayer_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sulfasalazine's effect on arachidonic acid metabolism in neutrophils, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| PGx | Aluko_2022 | not_relevant | 0 | 0 | The text is a general introduction to pharmacogenetics in rheumatoid arthritis and does not report specific data or effects for sulfasalazine. |
| popPK | Atienza-Mateo_2024 | irrelevant | 0 | 0 | The study focuses on the clinical effectiveness of abatacept in rheumatoid arthritis-associated interstitial lung disease, and sulfasalazine is only mentioned as a previous therapy in patient characteristics, with no pharmacokinetic data provided. |
| popPK | Bach_1985 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| popPK | Bartlett_2013 | irrelevant | 0 | 0 | The study is an ecotoxicology assessment of sulfasalazine in freshwater amphipods, reporting toxicity endpoints (LC50/EC50) rather than pharmacokinetic parameters. |
| PD | Bartlett_2013 | not_relevant | 0 | 0 | The paper reports that sulfasalazine had no effect on survival or growth at any concentration tested, so no numeric PD parameters (e.g., EC50, Emax) are reported or derivable for this specific drug. |
| popPK | Bastida_2017 | irrelevant | 0 | 0 | The paper is a review of biologic agents for rheumatoid arthritis and does not contain pharmacokinetic data for sulfasalazine. |
| PD | Bastida_2017 | not_relevant | 0 | 0 | The paper is a review of biologic agents in rheumatoid arthritis and does not contain any data, analysis, or parameters for sulfasalazine. |
| popPK | Bastida_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tocilizumab, not sulfasalazine. |
| PD | Bastida_2018 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) analysis for tocilizumab, not sulfasalazine, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Bayram_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (carbonic anhydrase) and does not report any pharmacokinetic disposition parameters for sulfasalazine. |
| popPK | Brand_2011 | irrelevant | 0 | 0 | The study focuses on the interaction of hesperetin glucuronides with ABC transporters in vitro, using sulfasalazine only as a reference activator, and does not report pharmacokinetic parameters for sulfasalazine. |
| PD | Brand_2011 | not_relevant | 0 | 0 | The paper studies hesperetin glucuronides as substrates/inhibitors of ABC transporters; sulfasalazine is only mentioned as a reference activator for BCRP ATPase activity, not as the subject of a PD or exposure-response analysis. |
| popPK | Brinsi_2025 | irrelevant | 0 | 0 | The study is a pharmacological investigation of dill fruit extract in a rat model of ulcerative colitis where sulfasalazine is used only as a positive control, and no pharmacokinetic parameters are reported. |
| PD | Brinsi_2025 | not_relevant | 0 | 0 | The paper is a comparative study of dill fruit extract, sulfasalazine, and gallic acid in a rat model, reporting only group means for histological and biochemical endpoints without any PK data, concentration-effect modeling, or derivable PD parameters for sulfasalazine. |
| popPK | Charles-Schoeman_2017 | irrelevant | 0 | 0 | The study evaluates HDL function in rheumatoid arthritis patients and uses sulfasalazine only as a comparator therapy, reporting no pharmacokinetic parameters. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The study is a model-based meta-analysis of methotrexate efficacy in rheumatoid arthritis and does not report pharmacokinetic parameters for sulfasalazine. |
| PD | Chen_2025 | not_relevant | 0 | 0 | The paper analyzes methotrexate, not sulfasalazine. |
| popPK | Chu_2023 | irrelevant | 0 | 0 | The paper describes in-vitro transporter studies (MDCK cells) for a different drug (ECD) and does not contain pharmacokinetic parameters for sulfasalazine. |
| PD | Chu_2023 | not_relevant | 0 | 0 | The paper focuses on in vitro transporter inhibition (P-gp/BCRP) using encequidar and does not report any pharmacodynamic or exposure-response data for sulfasalazine. |
| popPK | Cloete_2021 | irrelevant | 0 | 0 | The paper is an in silico and in vitro study on Mycobacterium tuberculosis drug targets where sulfasalazine is only a comparator compound, with no pharmacokinetic parameters reported. |
| PD | Cloete_2021 | not_relevant | 3 | 2 | The paper reports in silico predicted IC50 values and qualitative in vitro growth inhibition data for sulfasalazine, but lacks a formal pharmacodynamic model, dose-response curve fitting, or extractable PD parameters (Emax, EC50) derived from experimental exposure-response analysis. |
| popPK | Dantas_2021 | irrelevant | 0 | 0 | The paper is a review of okra mucilage and contains no information regarding sulfasalazine or its pharmacokinetics. |
| PD | Dantas_2021 | not_relevant | 0 | 0 | The paper is a review on okra mucilage and does not mention sulfasalazine or report any pharmacodynamic or exposure-response data. |
| PGx | Dore_2023 | not_relevant | 0 | 0 | The study investigates the safety of mesalamine (not sulfasalazine) in G6PD deficiency and does not report pharmacokinetic or pharmacodynamic parameters of sulfasalazine. |
| popPK | Faison_1992 | irrelevant | 0 | 0 | The paper reports in-vitro enzymatic inhibition data (IC50) for sulfasalazine, not pharmacokinetic disposition parameters. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | The paper is a review of drug-induced acute kidney injury potential and does not report pharmacokinetic parameters for sulfasalazine. |
| PD | Fernández-Llaneza_2025 | not_relevant | 0 | 0 | The paper is a pharmacovigilance knowledge integration study focusing on adverse drug event reporting odds ratios and consensus lists, containing no pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters for sulfasalazine. |
| popPK | Figuera-Losada_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay characterizing sulfasalazine as a system xc- inhibitor, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Fletcher_2023 | irrelevant | 0 | 0 | The paper is a clinical case report regarding the treatment of Linear IgA Disease and Ulcerative Colitis, containing no pharmacokinetic studies or quantitative disposition parameters for sulfasalazine. |
| PD | Fletcher_2023 | not_relevant | 1 | 0 | The paper is a case report describing clinical resolution of symptoms with sulfasalazine but does not provide any numeric concentration-effect data, dose-response curves, or PD parameters. |
| PGx | Furet_2002 | not_relevant | 2 | 0 | The paper mentions poor tolerance to sulfasalazine in slow acetylators but does not report specific pharmacokinetic or pharmacodynamic parameters or quantitative effect sizes. |
| popPK | Grisham_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of N-nitrosation inhibition and does not report any pharmacokinetic parameters for sulfasalazine. |
| PGx | Gronich_2024 | not_relevant | 0 | 0 | The paper reports on the safety of sulfasalazine regarding hemolysis risk in G6PD-deficient patients, not on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Hamdan_2012 | irrelevant | 0 | 0 | The study focuses on the circadian regulation of the Abcg2 gene in mice and does not report pharmacokinetic parameters for sulfasalazine. |
| PD | Hamdan_2012 | not_relevant | 0 | 0 | The paper investigates the circadian regulation of the Abcg2 gene and BCRP protein expression/function in mice, but does not report any pharmacodynamic or exposure-response analysis for sulfasalazine. |
| PGx | Hein_2021 | not_relevant | 5 | 2 | The paper is a review that mentions sulfasalazine as a drug affected by NAT2 polymorphisms, but it does not report specific quantitative PK/PD effect sizes or fitted parameters for sulfasalazine in this text. |
| popPK | Hopkins_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of leflunomide and its metabolite teriflunomide, not sulfasalazine. |
| PD | Hopkins_2015 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic (PK) model for leflunomide/teriflunomide and does not report any pharmacodynamic (PD) or exposure-response relationship for sulfasalazine. |
| popPK | Hopkins_2016 | irrelevant | 0 | 0 | The study focuses on leflunomide/teriflunomide pharmacogenetics and toxicity, not sulfasalazine pharmacokinetics. |
| PD | Hopkins_2016 | not_relevant | 0 | 0 | The paper focuses on leflunomide/teriflunomide, not sulfasalazine, and reports no exposure-response or dose-response relationship for the target drug. |
| PGx | Hou_2014 | not_relevant | 2 | 5 | The study reports associations between NAT genotypes and adverse drug reactions (clinical outcomes), not specific pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., receptor binding) parameters. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The study investigates factors associated with long-term opioid use in arthritis patients and does not involve sulfasalazine or pharmacokinetic modeling. |
| PD | Huang_2025 | not_relevant | 0 | 0 | The paper investigates factors associated with long-term opioid use in AxSpA/PsA patients and does not report any pharmacodynamic or exposure-response relationship for sulfasalazine. |
| popPK | Inganäs_2025 | irrelevant | 0 | 0 | The paper discusses the conformational dynamics of PROTACs and is unrelated to sulfasalazine pharmacokinetics. |
| PD | Inganäs_2025 | not_relevant | 0 | 0 | The paper focuses on the physicochemical properties and membrane interactions of PROTACs, not on the pharmacodynamics of sulfasalazine. |
| PGx | James_2008 | not_relevant | 2 | 5 | The paper reports associations between folate pathway polymorphisms and clinical efficacy (DAS28 scores) of a combination regimen, but does not report specific pharmacokinetic or pharmacodynamic parameters of sulfasalazine itself. |
| popPK | Jaramillo_2023 | irrelevant | 0 | 0 | The paper is a clinical case report on Clostridium difficile infection where sulfasalazine is mentioned only as a co-administered medication, with no pharmacokinetic data or disposition parameters reported. |
| PD | Jaramillo_2023 | not_relevant | 0 | 0 | The paper is a clinical case report describing the treatment history of a patient with recurrent C. difficile infection and ulcerative colitis; it does not contain any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for sulfasalazine. |
| popPK | Jeong_2020 | irrelevant | 1 | 0 | The study focuses on a new codrug (ASA-azo-NA) with sulfasalazine serving only as a comparator, and no quantitative PK parameters (CL, V, etc.) for sulfasalazine are reported. |
| PD | Jeong_2020 | not_relevant | 3 | 2 | The paper reports an EC50 for the novel compound 5-ANA (18 μM) but provides no numeric PD parameters, dose-response curves, or exposure-response analysis for sulfasalazine. |
| PD | Kadife_2026 | not_relevant | 2 | 0 | The study reports pharmacokinetics and safety, and shows a qualitative increase in biomarkers (sFlt-1) post-treatment, but does not perform a pharmacodynamic modeling analysis or report numeric PD parameters (e.g., Emax, EC50) linking exposure to effect. |
| popPK | Kang_2022 | irrelevant | 0 | 0 | Sulfasalazine is used only as a comparator drug in a colitis efficacy study, with no pharmacokinetic parameters reported for it. |
| PD | Kang_2022 | not_relevant | 0 | 0 | The paper focuses on trans-cinnamic acid (tCA) and its prodrugs; sulfasalazine (SSZ) is used only as a positive control in efficacy studies without any PK/PD modeling or exposure-response analysis for SSZ. |
| popPK | Kang_2024 | irrelevant | 1 | 0 | Sulfasalazine is used only as a probe substrate to evaluate bosutinib's transporter inhibition, and no quantitative PK parameters (CL, V, etc.) for sulfasalazine are reported. |
| PD | Kang_2024 | not_relevant | 0 | 0 | The paper focuses on bosutinib's inhibition of drug transporters and its effect on the pharmacokinetics (exposure) of probe substrates like sulfasalazine, but it does not report a pharmacodynamic (concentration-effect or dose-response) relationship for sulfasalazine itself. |
| popPK | Kawami_2015 | irrelevant | 0 | 0 | The study focuses on methotrexate transport mechanisms in cell lines, using sulfasalazine only as a mechanistic inhibitor for the proton-coupled folate transporter, with no PK parameters reported for sulfasalazine. |
| PD | Kawami_2015 | not_relevant | 0 | 0 | The paper investigates methotrexate transport mechanisms in cell lines and mentions sulfasalazine only as a qualitative inhibitor of PCFT, without reporting any exposure-response or dose-response PD parameters for sulfasalazine. |
| PGx | Kim_2022 | not_relevant | 0 | 0 | The study investigates the effect of RETN polymorphisms on the efficacy of TNF-alpha inhibitors, not sulfasalazine. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sulfasalazine's effect on cell viability and cystine uptake, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Kreple_2023 | irrelevant | 0 | 0 | The study is a pharmacoepidemiologic and mouse model investigation of ALS treatments where sulfasalazine is a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Kreple_2023 | not_relevant | 0 | 0 | The paper reports a dose-response association for lovastatin, not sulfasalazine, and sulfasalazine was found to have no benefit in the mouse model without any reported PD parameters. |
| popPK | La_2024 | irrelevant | 0 | 0 | The paper describes an in vitro cell culture model for the blood-milk barrier and does not report pharmacokinetic parameters for sulfasalazine. |
| PD | La_2024 | not_relevant | 0 | 0 | The paper describes an in vitro cell culture model for the blood-milk barrier and reports permeability coefficients (Papp) for probe substrates, but it does not contain any pharmacodynamic (exposure-response or dose-response) analysis or numeric PD parameters for sulfasalazine. |
| popPK | Lai_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rivaroxaban, not sulfasalazine. |
| PD | Lai_2026 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PK) of rivaroxaban and its association with clinical outcomes, but does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for sulfasalazine or any other drug. |
| PGx | Lee_2015 | not_relevant | 0 | 0 | The paper is a review proposing study designs for BCRP drug-drug interactions and does not report original pharmacogenomic data or effect sizes for sulfasalazine. |
| popPK | Lee_2025 | relevant | 4 | 6 | The study reports non-compartmental PK parameters (AUC, Cmax, t1/2) for sulfasalazine in rats, but lacks compartmental parameters (CL, V) and serves primarily as a BCRP inhibitor study. |
| PD | Lee_2025 | not_relevant | 0 | 0 | The paper reports PK parameters (AUC, Cmax) for sulfasalazine to demonstrate a drug-drug interaction (increased exposure) but does not report a pharmacodynamic (exposure-response or dose-response) relationship or numeric PD parameters (e.g., Emax, EC50) for sulfasalazine. |
| PGx | Lennard_1998 | not_relevant | 0 | 0 | The paper discusses TPMT pharmacogenomics for thiopurines and mentions sulfasalazine only as a potential inhibitor of TPMT, not as the drug whose PK/PD is being modulated by a gene variant. |
| popPK | Lohman_2012 | irrelevant | 0 | 0 | The study is a pharmacological investigation of a PAR2 antagonist in a colitis model where sulfasalazine is used only as a comparator drug, with no pharmacokinetic parameters reported. |
| PD | Lohman_2012 | not_relevant | 1 | 0 | The paper compares the efficacy of a PAR2 antagonist to sulfasalazine in a colitis model but does not report any pharmacokinetic data, exposure-response analysis, or numeric PD parameters (e.g., Emax, EC50) for sulfasalazine. |
| popPK | Magini_2026 | irrelevant | 0 | 0 | The paper is a review of curcumin pharmacology and does not contain any data or parameters for sulfasalazine. |
| PD | Magini_2026 | not_relevant | 0 | 0 | The paper is a review of curcumin pharmacology and does not report any PD or exposure-response data for sulfasalazine. |
| PGx | Mangoni_2025 | not_relevant | 0 | 0 | The study investigates pharmacogenomic effects on blood pressure (a clinical outcome) in response to methotrexate, not on the pharmacokinetic or pharmacodynamic parameters of sulfasalazine. |
| popPK | Markopoulos_2015 | irrelevant | 0 | 0 | The study focuses on in-vitro dissolution modeling in the lower intestine, not on pharmacokinetic disposition parameters (CL, V, ka) for sulfasalazine. |
| popPK | Menon_2025 | irrelevant | 0 | 0 | The study focuses on the exposure-response analysis of tofacitinib, not sulfasalazine. |
| PD | Menon_2025 | not_relevant | 0 | 0 | The paper reports exposure-response analysis for tofacitinib, not sulfasalazine. |
| popPK | Meyers_1987 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for olsalazine in patients intolerant to sulfasalazine and does not report any pharmacokinetic parameters for sulfasalazine. |
| PD | Meyers_1987 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response trend for olsalazine (not sulfasalazine) using categorical clinical improvement rates, but provides no numeric PD parameters (e.g., EC50, Emax) or concentration-effect data. |
| PGx | Michiba_2025 | not_relevant | 1 | 0 | The paper characterizes intestinal transporters in a cell model and mentions sulfasalazine only as a substrate for efflux ratio measurement, without reporting a pharmacogenomic effect on its PK/PD parameters. |
| PGx | Mikus_1997 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of codeine and morphine, using sulfasalazine only as a marker for gastrointestinal transit time, not as the drug of interest for PK/PD analysis. |
| popPK | Minghetti_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mRNA expression in fibroblasts and does not report pharmacokinetic parameters. |
| popPK | Mishra_2023 | irrelevant | 0 | 0 | The study focuses on formulation development and in vitro/ex vivo release/permeation, not in vivo pharmacokinetic parameter estimation. |
| PD | Mishra_2023 | not_relevant | 0 | 0 | The paper focuses on the formulation, optimization, and in vitro/ex vivo release/permeation of sulfasalazine nanoparticles, with no in vivo pharmacodynamic or exposure-response analysis reported. |
| popPK | Mlakar_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on neuroblastoma cell signaling and drug efficacy where sulfasalazine is used as a co-administered inhibitor, not as the subject of a pharmacokinetic analysis. |
| PD | Mlakar_2024 | not_relevant | 2 | 1 | The paper reports qualitative synergy and tumor volume changes for sulfasalazine in combination with APR-246, but does not provide a dose-response curve or numeric PD parameters (e.g., IC50, Emax) for sulfasalazine alone or in a formal PK/PD model. |
| popPK | Muensterman_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of upadacitinib, not sulfasalazine. |
| PD | Muensterman_2022 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and exposure-response relationships for upadacitinib, not sulfasalazine. |
| popPK | Nesbitt_2025 | irrelevant | 0 | 0 | The paper studies a BLVRB inhibitor for thrombopoiesis in mice and does not involve sulfasalazine or its pharmacokinetics. |
| PD | Nesbitt_2025 | not_relevant | 0 | 0 | The paper focuses on a novel BLVRB inhibitor (BCT1028) and does not report pharmacodynamic or exposure-response data for sulfasalazine. |
| popPK | Nhiem_2011 | irrelevant | 0 | 0 | The paper is a pharmacological study on triterpene saponins where sulfasalazine is used only as a positive control for anti-inflammatory activity, with no pharmacokinetic parameters reported. |
| PD | Nhiem_2011 | not_relevant | 0 | 0 | The paper focuses on the isolation and biological activity of triterpene saponins; sulfasalazine is mentioned only as a positive control with a single IC50 value, not as the subject of a PD or exposure-response analysis. |
| popPK | Nielsen_1988 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study reporting IC50 values for leukotriene inhibition, not pharmacokinetic disposition parameters. |
| popPK | Nielsen_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sulfasalazine's effect on neutrophil superoxide generation and does not report any pharmacokinetic parameters. |
| popPK | Okamoto_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of sulfasalazine's inhibition of cystine uptake in A549 cells, not a pharmacokinetic study reporting disposition parameters for sulfasalazine. |
| PGx | Okazaki_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of sulfasalazine in cancer cells and identifies biomarkers for sensitivity, but it does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters in a clinical or population pharmacology context. |
| popPK | Owczarek-Januszkiewicz_2022 | irrelevant | 0 | 0 | The paper is a review of enzymatically modified isoquercitrin (a flavonoid) and does not contain any pharmacokinetic data for sulfasalazine. |
| PD | Owczarek-Januszkiewicz_2022 | not_relevant | 0 | 0 | The paper is a review of Enzymatically Modified Isoquercitrin (EMIQ) and does not contain any data, analysis, or mention of sulfasalazine. |
| PGx | PMID36049896_2023 | not_relevant | 0 | 0 | The paper focuses on G6PD genotype and medication use, not sulfasalazine pharmacokinetics or pharmacodynamics. |
| popPK | Park_2025 | irrelevant | 0 | 0 | The paper focuses on the therapeutic mechanism (PHF20-YY1 interaction) and efficacy in sarcopenia, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Pawlik_2009 | not_relevant | 2 | 5 | The paper reports an association with clinical efficacy (ACR20 response/remission) rather than a specific pharmacokinetic or pharmacodynamic parameter. |
| PGx | Petryszyn_2025 | not_relevant | 0 | 0 | The study investigates the association between NAT2 polymorphisms and susceptibility to Inflammatory Bowel Disease, not the effect of the genotype on the pharmacokinetics or pharmacodynamics of sulfasalazine. |
| PGx | Pham_2010 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of sulfasalazine as an inhibitor of the x(c)- transporter to sensitize cells to celastrol, rather than reporting how a gene variant affects the PK or PD of sulfasalazine itself. |
| PGx | Pierik_2006 | not_relevant | 0 | 0 | The text is a general review of pharmacogenetics in IBD and does not report specific quantitative pharmacokinetic or pharmacodynamic effects of gene variants on sulfasalazine. |
| PGx | Relling_1989 | not_relevant | 2 | 0 | The paper mentions sulfasalazine-induced adverse effects in slow acetylators but does not report specific changes in pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, ED50) for sulfasalazine. |
| PGx | Ricart_2002 | not_relevant | 0 | 0 | The study reports a null association between NAT1/NAT2 genotypes and clinical response/toxicity, finding no pharmacogenomic effect. |
| popPK | Rjoob_2025 | irrelevant | 0 | 0 | The paper describes a knowledge graph for cardiovascular disease and does not contain any pharmacokinetic data for sulfasalazine. |
| PD | Rjoob_2025 | not_relevant | 0 | 0 | The paper describes a knowledge graph for cardiovascular disease and drug repurposing, containing no pharmacodynamic or exposure-response data for sulfasalazine. |
| popPK | Rjoob_2026 | irrelevant | 0 | 0 | The paper describes a knowledge graph for cardiovascular disease and does not contain any pharmacokinetic data for sulfasalazine. |
| PD | Rjoob_2026 | not_relevant | 0 | 0 | The paper describes a knowledge graph for cardiovascular disease and does not contain any pharmacodynamic or exposure-response data for sulfasalazine. |
| PGx | Safar_2019_2 | not_relevant | 2 | 0 | The paper is a review discussing sulfasalazine as a probe substrate for ABCG2 transporters, but it does not report specific pharmacogenomic effect sizes or PK parameter changes for sulfasalazine itself. |
| popPK | Sammari_2024 | irrelevant | 0 | 0 | The study is a pharmacological evaluation of a plant extract's protective effects in a colitis model where sulfasalazine is used only as a positive control, with no pharmacokinetic parameters reported. |
| PD | Sammari_2024 | not_relevant | 0 | 0 | The paper uses sulfasalazine only as a single-dose positive control in an animal model and does not report any pharmacokinetic data, exposure-response analysis, or numeric PD parameters for sulfasalazine. |
| popPK | Scheurlen_1993 | irrelevant | 0 | 0 | The study investigates the in-vitro effect of olsalazine and mesalazine on ATPase activity, with sulfasalazine mentioned only as a comparator for side effects, and no pharmacokinetic parameters are reported. |
| PGx | Shah_2019 | not_relevant | 0 | 0 | The paper discusses dipyrone (metamizole) and agranulocytosis, not sulfasalazine. |
| popPK | Shore_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of darolutamide, not sulfasalazine. |
| PD | Shore_2019 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and drug-drug interactions of darolutamide, not sulfasalazine, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Sjödin_2011 | irrelevant | 2 | 0 | Sulfasalazine is used only as a probe drug to measure GI transit, and no quantitative PK parameter values are provided in the evidence. |
| PD | Song_2020 | not_relevant | 0 | 0 | The paper reports pharmacokinetic changes (AUC, Cmax) of sulfasalazine due to BCRP inhibition by quercetin, but does not provide a pharmacodynamic (exposure-response or dose-response) model or numeric PD parameters for sulfasalazine itself. |
| popPK | Sonmez_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sulfasalazine's effect on vascular reactivity and oxidative stress markers, reporting no pharmacokinetic parameters. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | The paper focuses on statins and COVID-19, with no mention of sulfasalazine or its pharmacokinetics. |
| PD | Sperry_2023 | not_relevant | 0 | 0 | The paper focuses on statins (simvastatin, atorvastatin, etc.) and does not contain any data, analysis, or mention of sulfasalazine. |
| popPK | Stenson_1983 | irrelevant | 0 | 0 | The study investigates the mechanism of action (enzyme inhibition) of sulfasalazine and does not report any pharmacokinetic disposition parameters. |
| popPK | Stenson_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sulfasalazine's effect on neutrophil receptor binding, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Sáfár_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of BCRP transport kinetics (Km, Vmax, IC50) and does not report in-vivo pharmacokinetic disposition parameters (CL, V, t1/2) for sulfasalazine. |
| PD | Sáfár_2021 | not_relevant | 2 | 1 | The paper reports in vitro transport kinetics (Km, Vmax, IC50) for BCRP inhibition, which are mechanistic/pharmacokinetic parameters, not pharmacodynamic exposure-response or dose-response relationships for the drug's clinical effect. |
| PGx | Taniguchi_2006 | not_relevant | 2 | 1 | The text is a review introduction that mentions pharmacogenomic studies exist but does not report specific gene-variant effects on PK/PD parameters for sulfasalazine. |
| popPK | Taniguchi_2019 | irrelevant | 0 | 0 | Sulfasalazine is used only as a probe substrate to evaluate transporter inhibition by dotinurad, not as the subject drug for PK parameter estimation. |
| PD | Taniguchi_2019 | not_relevant | 0 | 0 | The paper focuses on dotinurad; sulfasalazine is used only as a probe substrate for transporter inhibition and no PD parameters for sulfasalazine are reported. |
| popPK | Tenstad_2021 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study on fibrocyte differentiation where sulfasalazine is used as a test drug, not a pharmacokinetic study reporting disposition parameters. |
| PD | Tenstad_2021 | not_relevant | 0 | 0 | The paper reports in vitro dose-response data only for abatacept and tocilizumab; sulfasalazine was tested at a single concentration without dose-response analysis or numeric PD parameters. |
| popPK | Thanigaimani_2022 | irrelevant | 0 | 0 | The study examines the association between immunosuppressant drug prescriptions (including sulfasalazine) and abdominal aortic aneurysm growth, reporting no pharmacokinetic parameters. |
| popPK | Tornhamre_1989 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on enzyme inhibition (lipoxygenase/cyclooxygenase) and does not report pharmacokinetic disposition parameters. |
| popPK | Wadworth_1991_2 | irrelevant | 0 | 0 | The paper is a review of olsalazine, not sulfasalazine, and contains no quantitative pharmacokinetic parameters for sulfasalazine. |
| PD | Wadworth_1991_2 | not_relevant | 1 | 0 | The text is a qualitative review of olsalazine (a sulfasalazine analog) that mentions dose-dependent side effects but provides no numeric PD parameters, concentration-effect curves, or formal PK/PD modeling. |
| popPK | Watson_2020 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and toxicity of chloroquine and hydroxychloroquine, not sulfasalazine. |
| PD | Watson_2020 | not_relevant | 0 | 0 | The paper reports pharmacodynamic models for chloroquine (mortality and QRS duration), not sulfasalazine. |
| popPK | Watson_2020_2 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and toxicity of chloroquine and hydroxychloroquine, not sulfasalazine. |
| PGx | Weber_1999 | not_relevant | 2 | 0 | The text mentions sulfasalazine only as an example of a drug metabolized by NAT2 in a general discussion of ethnic polymorphisms, without reporting specific pharmacokinetic or pharmacodynamic data or effect sizes. |
| popPK | Wojciechowski_2015 | irrelevant | 0 | 0 | The study models disease activity (DAS28) rather than the pharmacokinetic disposition parameters (CL, V, ka) of sulfasalazine. |
| PD | Wojciechowski_2015 | not_relevant | 0 | 0 | The paper models the time-course of disease activity (DAS28) over 60 weeks but does not include drug concentration data or perform an exposure-response (PK/PD) analysis; it is a pharmacodynamic time-course model, not a concentration-effect relationship. |
| popPK | Wojciechowski_2016 | irrelevant | 0 | 0 | The study evaluates clinical metrics for rheumatoid arthritis disease activity and does not report pharmacokinetic parameters for sulfasalazine. |
| PD | Wojciechowski_2016 | not_relevant | 0 | 0 | The paper evaluates clinical metrics for rheumatoid arthritis disease activity using population modeling but does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for sulfasalazine. |
| popPK | Wu_2023 | irrelevant | 2 | 0 | The study focuses on the mechanistic regulation of BCRP expression by REV-ERBα using sulfasalazine as a probe, and the provided evidence contains no quantitative pharmacokinetic parameter values. |
| PD | Wu_2023 | not_relevant | 0 | 0 | The paper focuses on the regulation of BCRP expression and sulfasalazine pharmacokinetics (PK) by REV-ERBα, with no report of pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Yamasaki_2008 | relevant | 10 | 2 | The study reports population PK modeling of sulfasalazine in humans, but specific numeric parameter values (CL, V, ka) are not listed in the provided text, only AUC summary statistics. |
| PD | Yamasaki_2008 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetics (PK) and pharmacogenetics (NAT2/ABCG2 polymorphisms) of sulfasalazine, reporting PK parameters like AUC, but does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Yu_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sulfasalazine-induced ferroptosis in breast cancer cells and does not report any pharmacokinetic parameters. |
| PGx | Zhang_2024 | not_relevant | 0 | 0 | The paper reports clinical characteristics and NOD2 genotypes in Yao syndrome patients, noting that 55.6% responded to sulfasalazine, but it does not report a pharmacogenomic effect on a specific PK or PD parameter of sulfasalazine. |
| PGx | van_2025 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (GLPG3970 inhibiting BCRP) rather than a pharmacogenomic effect of a gene variant on sulfasalazine PK. |
| popPK | Świerczek_2024 | irrelevant | 0 | 0 | The paper is a general review of pharmacometrics in autoimmune diseases and does not report specific quantitative PK parameters for sulfasalazine. |
| PD | Świerczek_2024 | not_relevant | 0 | 0 | The paper is a general review of pharmacometric methods in autoimmune diseases and does not report specific PD parameters or exposure-response data for sulfasalazine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
