<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02C&quot;,&quot;href&quot;:&quot;atc/C02C.md&quot;},{&quot;label&quot;:&quot;debrisoquine&quot;}]"></div>

# debrisoquine

- **generic name:** debrisoquine
- **ATC codes:** `C02CC04`
- **DrugBank:** [DB04840](https://go.drugbank.com/drugs/DB04840) · **PubChem:** [CID 2966](https://pubchem.ncbi.nlm.nih.gov/compound/2966)
- **molar mass:** 175.2303 g/mol (C10H13N3) — DrugBank
- **groups:** approved

## About

**Description.** An adrenergic neuron-blocking drug similar in effects to guanethidine. It is also noteworthy in being a substrate for a polymorphic cytochrome P-450 enzyme. Persons with certain isoforms of this enzyme are unable to properly metabolize this and many other clinically important drugs. They are commonly referred to as having a debrisoquin 4-hydroxylase polymorphism.

**Indication.** For the treatment of moderate and severe hypertension, either alone or as an adjunct, and for the treatment of renal hypertension.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 22:49 | 41:38 | 0/0/0 | 0/0/0 | 0/0/0 | 149,743/10,462 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 4/2 | 5/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=debrisoquine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: SLC6A2 (inducer).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 496 matched, 122 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_31 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alván_1991.pdf` | Alván G, Clinical consequences of polymorphic dr…, Fundamental & clinical phar… (1991) | pd | 5 | [10.1111/j.1472-8206.1991.tb00713.x](https://doi.org/10.1111/j.1472-8206.1991.tb00713.x) | [1937350](https://www.ncbi.nlm.nih.gov/pubmed/1937350) | metadata signals extractable PD data (concentration-effect) |
| `Gram_1990.pdf` | Gram LF, Inadequate dosing and pharmacokinetic v…, Clinical neuropharmacology (1990) | pd | 5 | [10.1097/00002826-199001001-00004](https://doi.org/10.1097/00002826-199001001-00004) | [2199035](https://www.ncbi.nlm.nih.gov/pubmed/2199035) | metadata signals extractable PD data (concentrationeffect) |
| `Haefeli_1991.pdf` | Haefeli WE et al., Concentration-effect relations of 5-hyd…, The American journal of car… (1991) | pd | 5 | [10.1016/0002-9149(91)90177-m](https://doi.org/10.1016/0002-9149(91)90177-m) | [2018005](https://www.ncbi.nlm.nih.gov/pubmed/2018005) | metadata signals extractable PD data (Concentration-effect) |
| `Ellis_1992.pdf` | Ellis SW et al., Catalytic activities of human debrisoqu…, Biochemical pharmacology (1992) | pd | 4 | [10.1016/0006-2952(92)90394-x](https://doi.org/10.1016/0006-2952(92)90394-x) | [1510710](https://www.ncbi.nlm.nih.gov/pubmed/1510710) | metadata signals extractable PD data (IC50) |
| `Kobayashi_1989.pdf` | Kobayashi S et al., The specificity of inhibition of debris…, Biochemical pharmacology (1989) | pd | 4 | [10.1016/0006-2952(89)90433-4](https://doi.org/10.1016/0006-2952(89)90433-4) | [2775304](https://www.ncbi.nlm.nih.gov/pubmed/2775304) | metadata signals extractable PD data (IC50) |
| `Masubuchi_1994.pdf` | Masubuchi Y et al., Cytochrome P450 isozymes involved in pr…, Drug metabolism and disposi… (1994) | pd | 4 | not captured | [7895609](https://www.ncbi.nlm.nih.gov/pubmed/7895609) | metadata signals extractable PD data (IC50) |
| `Speirs_1986.pdf` | Speirs CJ et al., Quinidine and the identification of dru…, British journal of clinical… (1986) | pd | 4 | [10.1111/j.1365-2125.1986.tb02969.x](https://doi.org/10.1111/j.1365-2125.1986.tb02969.x) | [3567021](https://www.ncbi.nlm.nih.gov/pubmed/3567021) | metadata signals extractable PD data (IC50) |
| `Tyndale_1991.pdf` | Tyndale RF et al., Neuronal cytochrome P450IID1 (debrisoqu…, Molecular pharmacology (1991) | pd | 4 | not captured | [1857341](https://www.ncbi.nlm.nih.gov/pubmed/1857341) | metadata signals extractable PD data (IC50) |
| `Brynne_1999.pdf` | Brynne N et al., Tolterodine does not affect the human i…, British journal of clinical… (1999) | pgx | 8 | [10.1046/j.1365-2125.1999.00865.x](https://doi.org/10.1046/j.1365-2125.1999.00865.x) | [10190648](https://www.ncbi.nlm.nih.gov/pubmed/10190648) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Eichelbaum_1997.pdf` | Eichelbaum M et al., Impact of P450 genetic polymorphism on…, Advanced drug delivery revi… (1997) | pgx | 8 | [10.1016/s0169-409x(97)00042-2](https://doi.org/10.1016/s0169-409x(97)00042-2) | [10837557](https://www.ncbi.nlm.nih.gov/pubmed/10837557) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `LLerena_2004.pdf` | LLerena A et al., Relationship between haloperidol plasma…, Pharmacopsychiatry (2004) | pgx | 8 | [10.1055/s-2004-815528](https://doi.org/10.1055/s-2004-815528) | [15048614](https://www.ncbi.nlm.nih.gov/pubmed/15048614) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Timmer_2000.pdf` | Timmer CJ et al., Clinical pharmacokinetics of mirtazapine, Clinical pharmacokinetics (2000) | pgx | 8 | [10.2165/00003088-200038060-00001](https://doi.org/10.2165/00003088-200038060-00001) | [10885584](https://www.ncbi.nlm.nih.gov/pubmed/10885584) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `van_2021.pdf` | van der Lee M et al., Substrate specificity of CYP2D6 genetic…, Pharmacogenomics (2021) | pgx | 8 | [10.2217/pgs-2021-0093](https://doi.org/10.2217/pgs-2021-0093) | [34569808](https://www.ncbi.nlm.nih.gov/pubmed/34569808) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Dahlinger_2017.pdf` | Dahlinger D et al., Assessment of inhibitory effects on maj…, Therapeutic advances in uro… (2017) | pgx | 7 | [10.1177/1756287217708951](https://doi.org/10.1177/1756287217708951) | [28747995](https://www.ncbi.nlm.nih.gov/pubmed/28747995) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Zamuner_2010.pdf` | Zamuner S et al., Effect of single and repeat doses of ca…, British journal of clinical… (2010) | pgx | 7 | [10.1111/j.1365-2125.2010.03729.x](https://doi.org/10.1111/j.1365-2125.2010.03729.x) | [20840445](https://www.ncbi.nlm.nih.gov/pubmed/20840445) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Akhmedova_1996.pdf` | Akhmedova SN et al., CYP2D6 genotyping in a Russian populati…, Biochemical and molecular m… (1996) | pgx | 5 | [10.1006/bmme.1996.0054](https://doi.org/10.1006/bmme.1996.0054) | [8812745](https://www.ncbi.nlm.nih.gov/pubmed/8812745) | metadata signals extractable PGX data (CYP2D6) |
| `Bozina_2002.pdf` | Bozina N et al., [Prevalence of ultraextensive drug meta…, Lijecnicki vjesnik (2002) | pgx | 5 | not captured | [18958918](https://www.ncbi.nlm.nih.gov/pubmed/18958918) | metadata signals extractable PGX data (CYP2D6) |
| `Chida_2002.pdf` | Chida M et al., New allelic arrangement CYP2D6*36 x 2 f…, Pharmacogenetics (2002) | pgx | 5 | [10.1097/00008571-200211000-00011](https://doi.org/10.1097/00008571-200211000-00011) | [12439227](https://www.ncbi.nlm.nih.gov/pubmed/12439227) | metadata signals extractable PGX data (CYP2D6*36) |
| `Dahl_1995.pdf` | Dahl ML et al., Ultrarapid hydroxylation of debrisoquin…, The Journal of pharmacology… (1995) | pgx | 5 | not captured | [7616439](https://www.ncbi.nlm.nih.gov/pubmed/7616439) | metadata signals extractable PGX data (CYP2D6) |
| `Douglas_1994.pdf` | Douglas AM et al., Interpretation of a simple PCR analysis…, Pharmacogenetics (1994) | pgx | 5 | [10.1097/00008571-199406000-00006](https://doi.org/10.1097/00008571-199406000-00006) | [7920695](https://www.ncbi.nlm.nih.gov/pubmed/7920695) | metadata signals extractable PGX data (CYP2D6) |
| `Granvil_2002.pdf` | Granvil CP et al., 4-Hydroxylation of debrisoquine by huma…, The Journal of pharmacology… (2002) | pgx | 5 | [10.1124/jpet.301.3.1025](https://doi.org/10.1124/jpet.301.3.1025) | [12023534](https://www.ncbi.nlm.nih.gov/pubmed/12023534) | metadata signals extractable PGX data (CYP1A1) |
| `Hadidi_1994.pdf` | Hadidi HF et al., Debrisoquine 4-hydroxylation (CYP2D6) p…, Pharmacogenetics (1994) | pgx | 5 | [10.1097/00008571-199406000-00007](https://doi.org/10.1097/00008571-199406000-00007) | [7920696](https://www.ncbi.nlm.nih.gov/pubmed/7920696) | metadata signals extractable PGX data (CYP2D6) |
| `Huckvale_2003.pdf` | Huckvale C et al., Debrisoquine hydroxylase gene polymorph…, Journal of neurology, neuro… (2003) | pgx | 5 | [10.1136/jnnp.74.1.135](https://doi.org/10.1136/jnnp.74.1.135) | [12486288](https://www.ncbi.nlm.nih.gov/pubmed/12486288) | metadata signals extractable PGX data (CYP2D6*4) |
| `Kunicki_1995.pdf` | Kunicki PK et al., Debrisoquine hydroxylation in a Polish…, European journal of clinica… (1995) | pgx | 5 | [10.1007/BF00193702](https://doi.org/10.1007/BF00193702) | [7768252](https://www.ncbi.nlm.nih.gov/pubmed/7768252) | metadata signals extractable PGX data (CYP2D6) |
| `Kurth_1993.pdf` | Kurth MC et al., Variant cytochrome P450 CYP2D6 allelic…, American journal of medical… (1993) | pgx | 5 | [10.1002/ajmg.1320480311](https://doi.org/10.1002/ajmg.1320480311) | [8291573](https://www.ncbi.nlm.nih.gov/pubmed/8291573) | metadata signals extractable PGX data (CYP2D6) |
| `Lee_1994.pdf` | Lee EJ et al., Frequency of human CYP2D6 mutant allele…, British journal of clinical… (1994) | pgx | 5 | [10.1111/j.1365-2125.1994.tb04311.x](https://doi.org/10.1111/j.1365-2125.1994.tb04311.x) | [7917781](https://www.ncbi.nlm.nih.gov/pubmed/7917781) | metadata signals extractable PGX data (CYP2D6) |
| `Moric-Janiszewska_2023.pdf` | Moric-Janiszewska E et al., Associations between Selected ADRB1 and…, Medicina (Kaunas, Lithuania) (2023) | pgx | 5 | [10.3390/medicina59122057](https://doi.org/10.3390/medicina59122057) | [38138160](https://www.ncbi.nlm.nih.gov/pubmed/38138160) | metadata signals extractable PGX data (CYP2D6) |
| `Saadatmand_2012.pdf` | Saadatmand AR et al., The prototypic pharmacogenetic drug deb…, Biochemical pharmacology (2012) | pgx | 5 | [10.1016/j.bcp.2012.01.032](https://doi.org/10.1016/j.bcp.2012.01.032) | [22342776](https://www.ncbi.nlm.nih.gov/pubmed/22342776) | metadata signals extractable PGX data (CYP2D6) |
| `Sachse_1998.pdf` | Sachse C et al., Correctness of prediction of the CYP2D6…, Pharmacogenetics (1998) | pgx | 5 | not captured | [10022755](https://www.ncbi.nlm.nih.gov/pubmed/10022755) | metadata signals extractable PGX data (CYP2D6) |
| `Spina_1994.pdf` | Spina E et al., CYP2D6-related oxidation polymorphism i…, Pharmacological research (1994) | pgx | 5 | [10.1016/1043-6618(94)80051-0](https://doi.org/10.1016/1043-6618(94)80051-0) | [8058599](https://www.ncbi.nlm.nih.gov/pubmed/8058599) | metadata signals extractable PGX data (CYP2D6) |
| `al-Hadidi_1994.pdf` | al-Hadidi HF et al., Metoprolol alpha-hydroxylation is a poo…, European journal of clinica… (1994) | pgx | 5 | [10.1007/BF00191160](https://doi.org/10.1007/BF00191160) | [7875180](https://www.ncbi.nlm.nih.gov/pubmed/7875180) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-09-27T22:39:30.435812+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Akhmedova_1996 | not_relevant | 0 | 0 | The paper reports the frequency of CYP2D6 mutations in a population but does not report any pharmacokinetic or pharmacodynamic parameters of debrisoquine. |
| popPK | Alván_1991 | irrelevant | 0 | 0 | no_text gate: only 51 chars of text extracted (&lt; 400) |
| PD | Alván_1991 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding debrisoquine pharmacodynamics. |
| PGx | Ayesh_1989 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of pinacidil, not debrisoquine, and explicitly states that pinacidil metabolism does not correlate with debrisoquine polymorphisms. |
| PGx | Bebia_2004 | not_relevant | 0 | 0 | The paper investigates the influence of age and sex on CYP2D6 activity using debrisoquine as a probe, but does not report effects of specific gene variants or genotypes (pharmacogenomics). |
| PGx | Behrle_2022 | not_relevant | 0 | 0 | The paper identifies an endogenous urinary biomarker (SSDA) for CYP2D6 activity and does not report pharmacokinetic or pharmacodynamic parameters of debrisoquine. |
| popPK | Blakey_2004 | irrelevant | 2 | 0 | Debrisoquine is used only as a CYP2D6 probe in a cocktail interaction study, and no quantitative disposition parameters (CL, V, t1/2) are reported in the evidence. |
| PD | Blakey_2004 | not_relevant | 0 | 0 | The study assesses PK/PD interactions using phenotypic indices (metabolite ratios) and vital signs, but does not report a concentration-effect or dose-response relationship with numeric PD parameters (e.g., Emax, EC50) for debrisoquine. |
| popPK | Boriani_1990 | irrelevant | 1 | 0 | Debrisoquine is used only as a diagnostic probe to determine oxidative phenotype, and the study reports pharmacokinetic parameters for propafenone, not debrisoquine. |
| PD | Boriani_1990 | not_relevant | 3 | 2 | The paper reports correlations between debrisoquine phenotype (D/4-OH-D ratio) and propafenone PK/PD parameters, but does not provide a concentration-effect or dose-response curve for debrisoquine itself, nor does it derive numeric PD parameters (Emax, EC50) for debrisoquine. |
| popPK | Boriani_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of propafenone, using debrisoquine only as a diagnostic probe to assess metabolic capacity, and does not report PK parameters for debrisoquine itself. |
| PD | Boriani_1991 | not_relevant | 2 | 1 | The study focuses on propafenone PK/PD and uses debrisoquine only as a phenotyping marker for metabolic capacity; it does not report a PD or exposure-response relationship for debrisoquine itself. |
| PGx | Bozina_2002 | not_relevant | 2 | 0 | The paper reports the prevalence of the CYP2D6 ultrarapid metabolizer genotype in a population but does not report specific pharmacokinetic or pharmacodynamic parameter changes for debrisoquine. |
| popPK | Brynne_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tolterodine, using debrisoquine only as a diagnostic probe to classify CYP2D6 metabolizer status, and does not report PK parameters for debrisoquine itself. |
| PD | Brynne_1998 | not_relevant | 3 | 2 | The paper reports qualitative PD comparisons and a qualitative observation that effects align with comparable unbound concentrations, but it does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve. |
| PGx | Brynne_1999 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (tolterodine's effect on debrisoquine metabolism) rather than the effect of a gene variant on a PK/PD parameter. |
| PGx | Buchert_1993 | not_relevant | 0 | 0 | The paper investigates the association between CYP2D6 genotype and breast cancer susceptibility, not the pharmacokinetic or pharmacodynamic parameters of debrisoquine. |
| PGx | Carrillo_2003 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of olanzapine, using debrisoquine only as a phenotypic marker for CYP2D6 activity, rather than reporting PK/PD parameters for debrisoquine itself. |
| PGx | Colado_1995 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics and pharmacodynamics of MDMA and MDA, using debrisoquine only as a phenotypic marker for CYP2D6 activity, not as the drug of interest. |
| PGx | Cooke_2012 | not_relevant | 0 | 0 | The study characterizes debrisoquine metabolism in marmoset liver microsomes but does not report pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Dahlinger_2017 | irrelevant | 0 | 0 | The study is an in-vitro CYP inhibition assay where debrisoquine is used only as a probe substrate for prediction, not as the subject of a pharmacokinetic parameter estimation. |
| PD | Dahlinger_2017 | not_relevant | 1 | 0 | The paper reports in vitro enzyme inhibition kinetics (IC50/Ki) and predicts PK changes (AUC) for debrisoquine, but does not report a pharmacodynamic (exposure-response) relationship or numeric PD parameters for debrisoquine itself. |
| PGx | Dahlinger_2017 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (inhibition of CYP2D6 by spasmolytics) and does not report any pharmacogenomic effects (gene variants) on debrisoquine PK/PD. |
| PGx | Daniels_1995 | not_relevant | 0 | 0 | The study investigates the association between CYP2D6 genotypes and schizophrenia susceptibility, not the effect of genotype on debrisoquine pharmacokinetics or pharmacodynamics. |
| popPK | Dayer_1986 | irrelevant | 0 | 0 | The study focuses on beta-blockers (bopindolol, atenolol, metoprolol) and uses debrisoquine only as a genetic marker for polymorphism, not as the subject drug for PK parameter extraction. |
| PD | Dayer_1986 | not_relevant | 2 | 1 | The paper discusses debrisoquine polymorphism only as a genetic determinant affecting bopindolol/metoprolol PK/PD, but does not report a PD model or numeric PD parameters for debrisoquine itself. |
| popPK | Dayer_1997 | irrelevant | 0 | 0 | The paper is a review of tramadol pharmacology where debrisoquine is only mentioned as a reference for CYP2D6 polymorphism, with no PK parameters reported for debrisoquine. |
| PD | Dayer_1997 | not_relevant | 1 | 0 | The text is a general pharmacological review of tramadol that mentions CYP2D6 (debrisoquine-type) only as a metabolic enzyme influencing M1 production, without providing any numeric PD parameters or exposure-response data for debrisoquine. |
| PGx | DiMaio_2008 | not_relevant | 0 | 0 | The paper characterizes a novel equine CYP2D50 enzyme and compares its activity to human CYP2D6, but it does not report a pharmacogenomic effect (gene variant/genotype) on PK/PD parameters in a population. |
| popPK | Eichelbaum_1997 | irrelevant | 0 | 0 | The paper is a review of CYP2D6 polymorphism and does not report original quantitative pharmacokinetic parameters for debrisoquine. |
| PD | Eichelbaum_1997 | not_relevant | 1 | 0 | The text is a review abstract discussing CYP2D6 polymorphisms and general pharmacokinetic consequences, without reporting specific numeric PD parameters or exposure-response data for debrisoquine. |
| PGx | Eichelbaum_1997 | not_relevant | 2 | 0 | The text is a review abstract discussing CYP2D6 polymorphisms generally and mentions debrisoquine only as a marker substrate, without reporting specific PK/PD data or quantitative effects for debrisoquine itself. |
| popPK | Ellis_1992 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Ellis_1992 | not_relevant | 0 | 0 | The paper reports in vitro enzymatic kinetics (Km, Vmax) of CYP2D6 in yeast, not in vivo pharmacodynamic or exposure-response relationships for debrisoquine. |
| popPK | Ellis_2000 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of CYP2D6 enzyme kinetics using debrisoquine as a substrate, not a pharmacokinetic study reporting disposition parameters. |
| PD | Ellis_2000 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (IC50, enantioselectivity ratios) for CYP2D6 mutants, not a pharmacodynamic exposure-response or dose-response relationship for debrisoquine in a biological system. |
| popPK | Frederiksen_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of brexpiprazole and its metabolites to estimate CYP2D6 activity, and does not report PK parameters for debrisoquine. |
| PD | Frederiksen_2023 | not_relevant | 0 | 0 | The paper reports population pharmacokinetic (PopPK) modeling of brexpiprazole and its metabolites to estimate CYP2D6 enzyme activity, but it does not report a pharmacodynamic (PD) or exposure-response relationship for debrisoquine or any other drug. |
| popPK | Funck-Brentano_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of encainide, using debrisoquine only as a diagnostic probe for metabolic phenotype, and does not report PK parameters for debrisoquine itself. |
| PD | Funck-Brentano_1989 | not_relevant | 3 | 2 | The study reports PK changes and qualitative ECG effects (QRS prolongation) correlated with debrisoquine phenotype, but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve for debrisoquine itself. |
| popPK | Goldstein_2007 | irrelevant | 0 | 0 | The paper is a review discussing genetic causes of treatment heterogeneity and mentions debrisoquine only as an example of a polymorphism, without reporting any quantitative pharmacokinetic parameters. |
| PD | Goldstein_2007 | not_relevant | 1 | 0 | The text is a qualitative review of genetic causes of treatment heterogeneity and mentions debrisoquine only as an example of PK polymorphism without providing any numeric PD parameters or exposure-response data. |
| PGx | Goldstein_2007 | not_relevant | 2 | 0 | The paper mentions debrisoquine polymorphism as a general example of ADME variation but does not report specific quantitative PK/PD parameters or fitted effect sizes for debrisoquine. |
| popPK | Gram_1990 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PD | Gram_1990 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric data, models, or parameters to assess for a PD relationship. |
| popPK | Granvil_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP enzyme kinetics (Km, Vmax, IC50) and does not report in-vivo pharmacokinetic disposition parameters (CL, V, t1/2) for debrisoquine. |
| PD | Granvil_2002 | not_relevant | 3 | 5 | The paper reports in vitro enzyme kinetics (Km, Vmax) and inhibition constants (IC50) for CYP1A1 and CYP2D6, which are mechanistic pharmacokinetic parameters, not in vivo pharmacodynamic (exposure-response) relationships for the drug debrisoquine. |
| PGx | Granvil_2002 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics and inhibition profiles of recombinant CYPs, not the effect of a human gene variant or genotype on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Grzegorzewski_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dextromethorphan, and debrisoquine is only mentioned as a historical CYP2D6 probe drug without any reported PK parameters. |
| PD | Grzegorzewski_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of dextromethorphan and the impact of CYP2D6 polymorphisms on metabolic ratios (UCMR), but it does not report a pharmacodynamic (PD) or exposure-response relationship for debrisoquine or any other drug. |
| PGx | Guengerich_1984 | not_relevant | 0 | 0 | The paper discusses the purification and regulation of cytochrome P-450 isoenzymes in rats and humans but does not report pharmacogenomic effects on debrisoquine PK/PD parameters. |
| popPK | Gueorguieva_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of desipramine, not debrisoquine. |
| PD | Gueorguieva_2010 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for desipramine, including clearance and volume parameters, but does not report any pharmacodynamic (PD) or exposure-response relationship. |
| PGx | Gurley_2008 | not_relevant | 0 | 0 | The study investigates herb-drug interactions (goldenseal inhibiting CYP2D6) rather than the effect of a genetic variant or genotype on pharmacokinetic parameters. |
| popPK | Haefeli_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of 5-hydroxypropafenone, using debrisoquine only to define the metabolic phenotype of the subjects. |
| popPK | Hallén_1993 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the subject drug (+)-terodiline, using debrisoquine only as a diagnostic probe to classify metabolizer status. |
| popPK | Haritos_1998 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of dexfenfluramine, using debrisoquine only as a phenotyping marker for CYP2D6 activity, and does not report pharmacokinetic parameters for debrisoquine. |
| PD | Haritos_1998 | not_relevant | 0 | 0 | The paper reports in vitro metabolic kinetics (Km, Vmax, IC50 for enzyme inhibition) of dexfenfluramine, not a pharmacodynamic exposure-response or dose-response relationship for debrisoquine. |
| popPK | Hellgren_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mefloquine, using debrisoquine only as a phenotyping probe to classify subjects, and reports no PK parameters for debrisoquine itself. |
| PGx | Huckvale_2003 | not_relevant | 0 | 0 | The paper investigates the association between CYP2D6*4 polymorphism and dementia with Lewy bodies, not the effect of the genotype on debrisoquine pharmacokinetics or pharmacodynamics. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper reports herbal-drug interactions and does not mention debrisoquine or pharmacogenomic effects. |
| popPK | Jonkers_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of metoprolol, using debrisoquine phenotype only as a genetic classifier rather than as the subject drug for PK parameter estimation. |
| popPK | Keizers_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2D6 enzyme kinetics using MAMC, bufuralol, and dextromethorphan, with no pharmacokinetic parameters reported for debrisoquine. |
| PD | Keizers_2004 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, kcat, IC50) for CYP2D6 mutants, not a pharmacodynamic exposure-response or dose-response relationship for debrisoquine in a biological system. |
| popPK | Kerbusch_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of darifenacin, not debrisoquine. |
| PD | Kerbusch_2003 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for darifenacin, not debrisoquine, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Kobayashi_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition kinetics (IC50, Ki) rather than a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for debrisoquine. |
| PGx | Kurth_1993 | not_relevant | 0 | 0 | The paper reports an association between CYP2D6 genotype and Parkinson's disease risk, not a change in debrisoquine PK/PD parameters. |
| PGx | LLerena_2004 | not_relevant | 0 | 0 | The study investigates the effect of haloperidol on debrisoquine metabolism (drug-drug interaction) and the effect of CYP2D6 genotype on haloperidol PK, but does not report a pharmacogenomic effect on debrisoquine PK parameters. |
| popPK | Lamarche_1970 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | Lamarche_1970 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the full text, abstract, or data required to determine if numeric PD parameters or exposure-response relationships are reported. |
| PGx | Lee_1994 | not_relevant | 5 | 2 | The paper reports allele frequencies and qualitative associations with phenotype but does not provide fitted quantitative effect sizes on specific PK/PD parameters. |
| popPK | Lennard_1984 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of propranolol, using debrisoquine only as a diagnostic probe for metabolic phenotype, and does not report PK parameters for debrisoquine itself. |
| PD | Lennard_1984 | not_relevant | 1 | 0 | The paper reports a qualitative lack of difference in pharmacodynamic effects (beta-blockade) between phenotypes but does not provide numeric PD parameters or concentration-effect curves. |
| popPK | Lennard_1985 | irrelevant | 0 | 0 | The paper is a review discussing beta-blockers and debrisoquine polymorphism, but it does not report quantitative pharmacokinetic parameters for debrisoquine itself. |
| PD | Lennard_1985 | not_relevant | 1 | 0 | The text is a qualitative review discussing the impact of debrisoquine phenotype on beta-blocker pharmacokinetics and pharmacodynamics, but it does not provide specific numeric PD parameters or concentration-effect curves. |
| popPK | Lennard_1986 | irrelevant | 0 | 0 | The paper is a review discussing debrisoquine polymorphism as a diagnostic marker for beta-blocker metabolism, not a study reporting quantitative PK parameters for debrisoquine itself. |
| PD | Lennard_1986 | not_relevant | 1 | 0 | The text is a qualitative review summarizing the impact of debrisoquine polymorphism on beta-blocker pharmacokinetics and pharmacodynamics, but it does not provide specific numeric PD parameters or concentration-effect data for debrisoquine itself. |
| popPK | Lennard_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of prazosin, using debrisoquine only as a diagnostic probe for metabolic phenotype, and does not report PK parameters for debrisoquine itself. |
| PD | Lennard_1988 | not_relevant | 0 | 0 | The paper reports a lack of significant difference in prazosin pharmacokinetics and first-dose effect between debrisoquine phenotypes, but does not provide numeric PD parameters or an exposure-response relationship for debrisoquine itself. |
| popPK | Lennard_1990 | irrelevant | 0 | 0 | The text is a review discussing the genetic polymorphism of sparteine/debrisoquine oxidation without reporting any original quantitative pharmacokinetic parameter values. |
| PD | Lennard_1990 | not_relevant | 1 | 0 | The text is a qualitative review discussing the genetic polymorphism of debrisoquine oxidation and its general impact on pharmacokinetics and pharmacodynamics, but it does not report any specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Lennard_1993 | irrelevant | 0 | 0 | The paper is a review discussing the clinical significance of CYP2D6 polymorphisms and does not report original quantitative pharmacokinetic parameters for debrisoquine. |
| PD | Lennard_1993 | not_relevant | 1 | 0 | The text is a qualitative review of genetic polymorphisms affecting drug metabolism and does not report any numeric pharmacodynamic parameters or concentration-effect relationships. |
| popPK | Lewis_1985 | irrelevant | 1 | 0 | Debrisoquine is used only as a diagnostic probe to classify metabolizer status, and no quantitative pharmacokinetic parameters (CL, V, etc.) for debrisoquine itself are reported. |
| popPK | Masubuchi_1994 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of propranolol, using debrisoquine only as a probe substrate for CYP2D6 activity correlation, with no pharmacokinetic parameters reported for debrisoquine. |
| PD | Masubuchi_1994 | not_relevant | 0 | 0 | The paper focuses on the enzymatic characterization of propranolol metabolism (CYP2D6/CYP1A2) in liver microsomes and does not report any pharmacodynamic or exposure-response relationship for debrisoquine. |
| popPK | Mehvar_2002 | irrelevant | 0 | 0 | The paper is a review of chiral antiarrhythmic drugs where debrisoquine is mentioned only as a phenotyping probe for metabolism, with no quantitative PK parameters reported for debrisoquine itself. |
| PD | Mehvar_2002 | not_relevant | 1 | 0 | The text is a qualitative review discussing stereoselectivity in PK and PD of antiarrhythmics and mentions debrisoquine only as a phenotyping marker for metabolism, without providing any numeric PD parameters or concentration-effect data. |
| popPK | Meyer_1982 | irrelevant | 0 | 0 | The text is a general review of pharmacogenetics that mentions debrisoquine only as an example of a polymorphic substrate without reporting any quantitative pharmacokinetic parameters. |
| PD | Meyer_1982 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacogenetic polymorphisms (specifically debrisoquine hydroxylase) and mentions a relationship between metabolism and clinical effects, but it provides no numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Mikus_1991 | irrelevant | 0 | 0 | The study focuses on codeine metabolism in rat liver microsomes, with debrisoquine mentioned only as a comparator for the poor metabolizer phenotype, and no PK parameters for debrisoquine are reported. |
| PD | Mikus_1991 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, Vmax, Ki) for codeine metabolism, not a pharmacodynamic (exposure-response or dose-response) relationship for debrisoquine. |
| PGx | Moric-Janiszewska_2023 | not_relevant | 0 | 0 | The paper reports the frequency of CYP2D6 and ADRB1 polymorphisms in a patient population but does not measure or report any pharmacokinetic or pharmacodynamic parameters of debrisoquine or any other drug. |
| PGx | Mukhopadhyay_2012 | not_relevant | 0 | 0 | The text is a list of citations from a review article and does not contain specific data or results regarding pharmacokinetic or pharmacodynamic parameters. |
| popPK | Murphy_2006 | irrelevant | 0 | 0 | The paper is a pharmacogenetic study using debrisoquine hydroxylase (CYP2D6) as a genetic marker to predict outcomes for other drugs (nortriptyline, paroxetine, mirtazapine), and does not report pharmacokinetic parameters for debrisoquine itself. |
| PD | Murphy_2006 | not_relevant | 1 | 0 | The paper discusses CYP2D6 genotypes and their effect on drug concentrations (PK) and outcomes, but does not report a concentration-effect or dose-response relationship with numeric PD parameters for debrisoquine or any other drug. |
| popPK | Murray_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP1A2 inhibition where debrisoquine is used only as a probe substrate for CYP2D6 specificity, with no pharmacokinetic parameters reported. |
| PD | Murray_2001 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50/Ki) of CYP1A2 by methylxanthines and mentions debrisoquine only as a substrate for CYP2D6 specificity testing, not as a drug with a pharmacodynamic exposure-response relationship. |
| popPK | Müller_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of propiverine, using debrisoquine only as a diagnostic probe for metabolizer status, and does not report PK parameters for debrisoquine itself. |
| PD | Müller_1993 | not_relevant | 1 | 0 | The study measures pharmacodynamic endpoints (BP, HR, etc.) but reports no numeric concentration-effect relationship, dose-response curve, or PD parameters (Emax, EC50), stating only that poor and extensive metabolizers did not differ significantly. |
| popPK | Niwa_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP inhibition where debrisoquine is used solely as a substrate for CYP2D6 activity, not as the subject drug for pharmacokinetic parameter estimation. |
| PD | Niwa_2005 | not_relevant | 3 | 3 | The paper reports in vitro enzyme inhibition (IC50) of CYP2D6 by antifungal drugs using debrisoquine as a substrate, which is a pharmacokinetic/metabolic interaction study, not a pharmacodynamic exposure-response or dose-response analysis of debrisoquine's therapeutic effect. |
| PGx | Ozdemir_2004 | not_relevant | 2 | 5 | The study investigates the effect of urine pH on drug/metabolite ratios, not the effect of a specific gene variant or genotype on PK/PD parameters. |
| PGx | Pereira_2000 | not_relevant | 0 | 0 | The paper describes an analytical method for measuring debrisoquine and its metabolite in a single healthy volunteer to validate the assay, without reporting a pharmacogenomic effect (e.g., comparison of PK/PD parameters between different genotypes). |
| popPK | Persson_1995 | irrelevant | 0 | 0 | The study focuses on codeine pharmacokinetics and dextromethorphan phenotyping, with no mention of debrisoquine or its disposition parameters. |
| PD | Persson_1995 | not_relevant | 3 | 2 | The study reports qualitative phenotyping and a range of effective doses/concentrations for codeine, but does not provide a fitted PD model or specific numeric PD parameters (like Emax or EC50) for debrisoquine. |
| popPK | Pierce_1990 | irrelevant | 0 | 0 | The paper is a review of indoramin pharmacokinetics, and debrisoquine is only mentioned as a co-segregating phenotype marker, not as the subject drug with reported PK parameters. |
| PD | Pierce_1990 | not_relevant | 1 | 0 | The paper is a review of indoramin pharmacokinetics and only qualitatively mentions that pharmacodynamics are related to drug and metabolite levels, without providing any numeric PD parameters or exposure-response curves. |
| PGx | Ramamoorthy_2001 | not_relevant | 1 | 1 | The paper reports in vitro inhibition constants (Ki) for debrisoquine against CYP2D6 variants, which is a molecular binding parameter, not a pharmacokinetic (e.g., clearance, AUC) or pharmacodynamic parameter of debrisoquine itself. |
| popPK | Rydberg_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of glibenclamide and its metabolites, not debrisoquine. |
| popPK | Saadatmand_2012 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Saadatmand_2012 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenetic interaction between debrisoquine and the OCT1 transporter, not on pharmacodynamic exposure-response modeling or numeric PD parameters. |
| PGx | Sachse_1998 | not_relevant | 0 | 0 | The paper focuses on the validation of CYP2D6 phenotyping methods via genotyping, not on reporting pharmacokinetic or pharmacodynamic parameter changes. |
| PGx | Sakai_2009 | not_relevant | 0 | 0 | The paper focuses on diazepam metabolism in rats and explicitly states the polymorphism is independent of debrisoquine. |
| popPK | Saleh_1990 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for medifoxamine, not debrisoquine, which is only mentioned as a diagnostic probe for metabolizer status. |
| popPK | Scheinin_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of selegiline, using debrisoquine only as a diagnostic probe to classify CYP2D6 metabolizer status, and does not report PK parameters for debrisoquine itself. |
| PD | Scheinin_1998 | not_relevant | 2 | 1 | The paper reports a single maximum effect value (97% inhibition) and in vitro IC50s, but lacks a concentration-effect curve or dose-response model for the drug in vivo. |
| PGx | Shu_2001 | not_relevant | 2 | 0 | The paper measures in vitro CYP2D6 activity using debrisoquine as a substrate to characterize interindividual variability, but it does not report a specific gene variant/genotype effect on a pharmacokinetic or pharmacodynamic parameter of debrisoquine in vivo. |
| PGx | Sindrup_1993 | not_relevant | 0 | 0 | The paper investigates pain tolerance (a physiological trait) in relation to CYP2D6 genotype, but does not report pharmacokinetic or pharmacodynamic parameters of debrisoquine itself. |
| popPK | Smith_1985 | irrelevant | 1 | 0 | The paper is a review discussing beta-blockers where debrisoquine is used only as a phenotyping probe, and no quantitative PK parameters for debrisoquine itself are reported. |
| PD | Smith_1985 | not_relevant | 1 | 0 | The text is a qualitative review discussing the impact of debrisoquine polymorphism on beta-blocker pharmacokinetics and pharmacodynamics, but it does not report any specific numeric PD parameters or concentration-effect curves. |
| PGx | Sommers_1991 | not_relevant | 2 | 5 | The study focuses on sparteine metabolism in a specific population and notes the absence of poor metabolizers, but does not report a specific pharmacogenomic effect size on debrisoquine PK/PD parameters. |
| popPK | Speirs_1986 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PD | Speirs_1986 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetic identification of poor metabolizers using quinidine and debrisoquine, reporting clearance and half-life data, but does not provide a pharmacodynamic exposure-response or dose-response analysis with numeric PD parameters. |
| PGx | Svensson_1999 | not_relevant | 0 | 0 | The paper describes an analytical method for measuring debrisoquine and its metabolite in urine for CYP2D6 phenotyping, but does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Teh_2001 | not_relevant | 0 | 0 | The paper reports CYP2D6 genotype frequencies in a population but does not measure or report specific pharmacokinetic or pharmacodynamic parameters of debrisoquine. |
| popPK | Thangarajh_2019 | irrelevant | 0 | 0 | The paper is a metabolomics study on Duchenne Muscular Dystrophy in mice and does not involve debrisoquine or pharmacokinetic parameters. |
| PD | Thangarajh_2019 | not_relevant | 0 | 0 | The paper investigates urine metabolite biomarkers in a mouse model and does not report any pharmacodynamic or exposure-response relationship for debrisoquine. |
| popPK | Timmer_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mirtazapine, using debrisoquine only as a diagnostic probe for CYP2D6 polymorphism status rather than as the subject drug. |
| PD | Timmer_2000 | not_relevant | 0 | 0 | The text explicitly states that "no concentration-effect relationship could be established" and provides no numeric PD parameters. |
| PGx | Timmer_2000 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of mirtazapine and mentions debrisoquine only as a marker for CYP2D6 status, not as the drug of interest. |
| popPK | Tucker_2000 | irrelevant | 0 | 0 | The text is a review discussing the discovery and clinical significance of the debrisoquine polymorphism without reporting any original quantitative pharmacokinetic parameters. |
| PD | Tucker_2000 | not_relevant | 1 | 0 | The text is a qualitative review discussing the debrisoquine polymorphism and drug metabolism without providing any specific numeric PD parameters or concentration-effect data. |
| PGx | Tyndale_1989 | not_relevant | 2 | 5 | The paper reports in vitro enzyme kinetics (Km, Vmax) for sparteine/debrisoquine metabolism in livers, not in vivo pharmacokinetic or pharmacodynamic parameters in humans. |
| popPK | Tyndale_1991 | irrelevant | 0 | 0 | no_text gate: only 171 chars of text extracted (&lt; 400) |
| PD | Tyndale_1991 | not_relevant | 0 | 0 | The paper focuses on the molecular cloning and sequence identity of neuronal CYP2D6 and its inhibition by cocaine, not on the pharmacokinetic or pharmacodynamic exposure-response relationship of debrisoquine itself. |
| PGx | Voss_1994 | not_relevant | 0 | 0 | The paper describes a radioligand binding assay for CYP2D1 in rat liver microsomes to predict polymorphism, but it does not report pharmacokinetic or pharmacodynamic data for debrisoquine in humans or any subject. |
| PGx | Wagner_1987 | not_relevant | 5 | 10 | The paper reports PK effects (plasma concentrations) for metoprolol, diltiazem, and propafenone in a sparteine poor metabolizer, but does not report PK or PD parameters for debrisoquine itself. |
| PGx | White_2022 | not_relevant | 0 | 0 | The paper reports the effect of biological drugs (interferons, IL-inhibitors) on CYP2D6 metabolism of debrisoquine, which is a pharmacodynamic/drug-drug interaction, not a pharmacogenomic effect based on a gene variant or genotype. |
| PGx | Wolf_1999 | not_relevant | 0 | 0 | The text is a general overview of CYP2D6 polymorphism and its clinical implications but does not report specific quantitative pharmacokinetic or pharmacodynamic data for debrisoquine. |
| PGx | Yu_2006 | not_relevant | 0 | 0 | The paper characterizes the in vitro enzymatic properties of mouse Cyp2d22 and does not report pharmacogenomic effects on the PK or PD of debrisoquine in humans or a relevant model. |
| PGx | Zamuner_2010 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (casopitant affecting debrisoquine) rather than a pharmacogenomic effect (gene variant affecting PK/PD). |
| PGx | Zgheib_2006 | not_relevant | 0 | 0 | The study validates the simultaneous administration of probe drugs (including debrisoquine) to measure enzyme phenotypes, but it does not report how specific gene variants or genotypes alter the PK/PD parameters of debrisoquine. |
| PGx | Zhang_2004 | not_relevant | 0 | 0 | The study investigates drug-drug interactions with enfuvirtide, not the effect of genetic variants on debrisoquine pharmacokinetics. |
| PGx | al-Hadidi_1994 | not_relevant | 2 | 5 | The paper assesses the utility of metoprolol as a probe for CYP2D6 polymorphism and reports correlation with debrisoquine ratios, but does not report a pharmacogenomic effect on the PK/PD parameters of debrisoquine itself. |
| popPK | de_1998 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ondansetron, not debrisoquine. |
| PD | de_1998 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics of ondansetron and does not mention debrisoquine or report any pharmacodynamic or exposure-response relationships. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
