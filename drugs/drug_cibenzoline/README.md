<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;cibenzoline&quot;}]"></div>

# cibenzoline

- **generic name:** cibenzoline
- **ATC codes:** `C01BG07`
- **DrugBank:** [DB13358](https://go.drugbank.com/drugs/DB13358)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 15:03 | 5:22 | 0/0/0 | 3/4/0 | 0/0/0 | 170,743/4,624 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 9/1 | 9/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tabuchi_2001](drugs/drug_cibenzoline/pd_Tabuchi_2001_gastric_H_K_ATPase_activity.md) | Tabuchi Y et al., Cibenzoline, an ATP-sensitive K(+) chan…, British journal of pharmaco… (2001) | [10.1038/sj.bjp.0704422](https://doi.org/10.1038/sj.bjp.0704422) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tamura_2009](drugs/drug_cibenzoline/pd_Tamura_2009_unknown.md) | Tamura A et al., Effects of antiarrhythmic drugs on the…, Journal of pharmacological… (2009) | [10.1254/jphs.08312fp](https://doi.org/10.1254/jphs.08312fp) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yamakawa_2012](drugs/drug_cibenzoline/pd_Yamakawa_2012_Na_Ca2_exchange_current_I_NCX.md) | Yamakawa T et al., Inhibitory effect of cibenzoline on Na+…, Journal of pharmacological… (2012) | [10.1254/jphs.12050sc](https://doi.org/10.1254/jphs.12050sc) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Hiiro_2023](drugs/drug_cibenzoline/pd_Hiiro_2023_unknown.md) | Hiiro H et al., Negative Inotropic Effects of Class I A…, Biological & pharmaceutical… (2023) | [10.1248/bpb.b22-00644](https://doi.org/10.1248/bpb.b22-00644) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Holck_1986](drugs/drug_cibenzoline/pd_Holck_1986_KCl_induced_contractures_of_isolated_aortic_strip.md) | Holck M et al., Inhibition of the myocardial Ca2+ inwar…, British journal of pharmaco… (1986) | [10.1111/j.1476-5381.1986.tb14588.x](https://doi.org/10.1111/j.1476-5381.1986.tb14588.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Holck_1986](drugs/drug_cibenzoline/pd_Holck_1986_contractile_force_of_isolated_papillary_muscles.md) | Holck M et al., Inhibition of the myocardial Ca2+ inwar…, British journal of pharmaco… (1986) | [10.1111/j.1476-5381.1986.tb14588.x](https://doi.org/10.1111/j.1476-5381.1986.tb14588.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Holck_1986](drugs/drug_cibenzoline/pd_Holck_1986_myocardial_Ca2_inward_current.md) | Holck M et al., Inhibition of the myocardial Ca2+ inwar…, British journal of pharmaco… (1986) | [10.1111/j.1476-5381.1986.tb14588.x](https://doi.org/10.1111/j.1476-5381.1986.tb14588.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ishida-Takahashi_1996](drugs/drug_cibenzoline/pd_Ishida_Takahashi_1996_unknown.md) | Ishida-Takahashi A et al., Block of pancreatic ATP-sensitive K+ ch…, British journal of pharmaco… (1996) | [10.1111/j.1476-5381.1996.tb15349.x](https://doi.org/10.1111/j.1476-5381.1996.tb15349.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Sakuta_1993](drugs/drug_cibenzoline/pd_Sakuta_1993_unknown.md) | Sakuta H et al., Antiarrhythmic drugs, clofilium and cib…, British journal of pharmaco… (1993) | [10.1111/j.1476-5381.1993.tb13655.x](https://doi.org/10.1111/j.1476-5381.1993.tb13655.x) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 41 matched, 40 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brazzell_1985.pdf` | Brazzell RK et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (1985) | popPK | 10 | [10.1002/j.1552-4604.1985.tb02869.x](https://doi.org/10.1002/j.1552-4604.1985.tb02869.x) | [4056077](https://pubmed.ncbi.nlm.nih.gov/4056077) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, half-life) for cibenzoline in humans with specific numeric values provided in the text. |
| `Holazo_1986.pdf` | Holazo AA et al., Pharmacokinetic and pharmacodynamic mod…, Journal of clinical pharmac… (1986) | popPK | 9 | [10.1002/j.1552-4604.1986.tb03535.x](https://doi.org/10.1002/j.1552-4604.1986.tb03535.x) | [3700689](https://pubmed.ncbi.nlm.nih.gov/3700689) | The paper describes a PK/PD modeling study for cibenzoline, but the provided evidence contains only the abstract/methodology description without any specific numeric parameter values. |
| `Takahashi_2011.pdf` | Takahashi Y et al., Pharmacodynamics of cibenzoline-induced…, Drug metabolism and pharmac… (2011) | popPK | 8 | [10.2133/dmpk.DMPK-10-RG-127](https://doi.org/10.2133/dmpk.DMPK-10-RG-127) | [21273730](https://pubmed.ncbi.nlm.nih.gov/21273730) | The study reports a compartmental PK model for cibenzoline in rats, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| `Brazzell_1984.pdf` | Brazzell RK et al., Cibenzoline plasma concentration and an…, Clinical pharmacology and t… (1984) | pd | 5 | [10.1038/clpt.1984.35](https://doi.org/10.1038/clpt.1984.35) | [6697638](https://www.ncbi.nlm.nih.gov/pubmed/6697638) | metadata signals extractable PD data (concentration-effect) |
| `Hasannejad_2004.pdf` | Hasannejad H et al., Human organic cation transporter 3 medi…, European journal of pharmac… (2004) | pd | 4 | [10.1016/j.ejphar.2004.07.098](https://doi.org/10.1016/j.ejphar.2004.07.098) | [15363950](https://www.ncbi.nlm.nih.gov/pubmed/15363950) | metadata signals extractable PD data (IC50) |
| `Horie_1992.pdf` | Horie M et al., Comparative studies of ATP sensitive po…, Cardiovascular research (1992) | pd | 4 | [10.1093/cvr/26.11.1087](https://doi.org/10.1093/cvr/26.11.1087) | [1291086](https://www.ncbi.nlm.nih.gov/pubmed/1291086) | metadata signals extractable PD data (IC50) |
| `Matsuoka_1991.pdf` | Matsuoka S et al., Comparison of Ca2+ channel inhibitory e…, General pharmacology (1991) | pd | 4 | [10.1016/0306-3623(91)90314-v](https://doi.org/10.1016/0306-3623(91)90314-v) | [2050292](https://www.ncbi.nlm.nih.gov/pubmed/2050292) | metadata signals extractable PD data (IC50) |
| `Nawada_1994.pdf` | Nawada T et al., Evaluation of negative inotropic and an…, International journal of cl… (1994) | pd | 4 | not captured | [7952796](https://www.ncbi.nlm.nih.gov/pubmed/7952796) | metadata signals extractable PD data (IC50) |
| `Yamamoto_1999.pdf` | Yamamoto N et al., A comparison of the binding characteris…, Journal of cardiovascular p… (1999) | pd | 4 | [10.1097/00005344-199907000-00009](https://doi.org/10.1097/00005344-199907000-00009) | [10413067](https://www.ncbi.nlm.nih.gov/pubmed/10413067) | metadata signals extractable PD data (IC50) |
| `Niwa_2000.pdf` | Niwa T et al., Stereoselective metabolism of cibenzoli…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10950860](https://www.ncbi.nlm.nih.gov/pubmed/10950860) | metadata signals extractable PGX data (CYP2D, PK/PD-context) |

<sub>queue written 2026-09-19T15:01:14.076677+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aronoff_1991 | not_relevant | 0 | 0 | The study investigates the effect of renal function (a physiological state) on cibenzoline pharmacokinetics, not the effect of a gene variant or genotype. |
| popPK | Brazzell_1984 | irrelevant | 0 | 0 | no_text gate: only 58 chars of text extracted (&lt; 400) |
| PD | Brazzell_1984 | not_relevant | 0 | 0 | The provided text is only a title and lacks the full content required to determine if numeric PD parameters or an exposure-response relationship are reported. |
| PD | Brazzell_1985 | not_relevant | 3 | 1 | The paper reports PK parameters and qualitatively describes a hysteresis loop for QRS prolongation, but it does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve. |
| popPK | Galimberti_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay measuring efficacy and potency (IC50) of cibenzoline on calcium waves, not a pharmacokinetic study reporting disposition parameters. |
| PD | Galimberti_2011 | not_relevant | 0 | 0 | The paper reports that cibenzoline had no significant effect on Ca2+ waves at the highest tested concentration (100 μM), providing no numeric PD parameters (such as IC50 or Emax) or derivable dose-response curve for this specific drug. |
| popPK | Hasannejad_2004 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Hasannejad_2004 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of drug transport via OCT3 and does not report pharmacodynamic or exposure-response relationships for cibenzoline. |
| popPK | Heusner_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug-drug interactions where cibenzoline is a comparator inhibitor, not the subject of a pharmacokinetic parameter analysis. |
| PD | Heusner_1985 | not_relevant | 3 | 2 | The paper reports an IC50 &gt; 1 mM for cibenzoline in an in vitro metabolic inhibition assay, which is a pharmacokinetic interaction parameter, not a pharmacodynamic exposure-response relationship for cibenzoline itself. |
| popPK | Hiiro_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of negative inotropic effects in guinea pig tissue and does not report pharmacokinetic parameters for cibenzoline. |
| popPK | Hiramatsu_2004 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment measuring channel block (IC50) in HEK293 cells, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Holazo_1986 | relevant | 9 | 0 | The paper describes a PK/PD modeling study for cibenzoline, but the provided evidence contains only the abstract/methodology description without any specific numeric parameter values. |
| popPK | Holck_1986 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological and contractility investigation reporting IC50 values for calcium current inhibition, not pharmacokinetic disposition parameters. |
| popPK | Horie_1992 | irrelevant | 0 | 0 | no_text gate: only 138 chars of text extracted (&lt; 400) |
| PD | Horie_1992 | not_relevant | 0 | 0 | The paper focuses on the electrophysiological mechanism of action (blocking ATP-sensitive potassium channels) and does not report pharmacokinetic data, exposure-response relationships, or numeric PD parameters like Emax or EC50 for cibenzoline. |
| popPK | Ishida-Takahashi_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cibenzoline's effect on pancreatic KATP channels and insulin secretion, reporting no pharmacokinetic disposition parameters. |
| popPK | Kakumoto_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of MDR1 transport inhibition by various drugs, and cibenzoline is only a comparator agent with no pharmacokinetic parameters reported. |
| PD | Kakumoto_2002 | not_relevant | 0 | 0 | The paper reports IC50 values for amiodarone, DEA, quinidine, and dipyridamole, but cibenzoline is only tested qualitatively or without reported numeric PD parameters. |
| popPK | Komatsu_2015 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of digoxin, and cibenzoline is only listed as a concomitant medication in the patient characteristics table without any specific PK parameters reported for it. |
| PD | Komatsu_2015 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of digoxin, not cibenzoline, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Matsuoka_1991 | irrelevant | 0 | 0 | no_text gate: only 95 chars of text extracted (&lt; 400) |
| popPK | Miyamoto_2000 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of antiarrhythmic effects in dogs and does not report any pharmacokinetic parameters for cibenzoline. |
| PD | Miyamoto_2000 | not_relevant | 3 | 2 | The paper reports qualitative changes in arrhythmic ratio and QTc for cibenzoline but does not provide numeric dose-response parameters (e.g., ED50, Emax) or a quantitative concentration-effect curve for the drug itself. |
| popPK | Nawada_1994 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | Nawada_1994 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to evaluate PD relationships. |
| PGx | Niwa_2000 | not_relevant | 0 | 0 | The paper investigates stereoselective metabolism and enzyme involvement (CYP2D6/3A4) in vitro but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| popPK | Plosker_2010 | irrelevant | 0 | 0 | The paper is a review of pilsicainide where cibenzoline is only mentioned as a comparator in a clinical trial, with no pharmacokinetic parameters reported. |
| PD | Plosker_2010 | not_relevant | 1 | 0 | The text is a qualitative review of clinical efficacy and safety for pilsicainide and cibenzoline, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Rydberg_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of glibenclamide and its metabolites, not cibenzoline. |
| PD | Rydberg_1997 | not_relevant | 0 | 0 | The paper reports PD parameters for glibenclamide and its metabolites, not for cibenzoline. |
| popPK | Sakuta_1993 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study on Xenopus oocytes reporting IC50 values for K+ channel blockade, not a pharmacokinetic study with disposition parameters. |
| popPK | Sakuta_1994 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel inhibition in Xenopus oocytes and does not report pharmacokinetic parameters for cibenzoline. |
| popPK | Satoh_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ionic currents in rat cells, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Tabuchi_2001 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study investigating cibenzoline's inhibition of gastric H+,K+-ATPase, reporting IC50 and Ki values rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Takahashi_2011 | relevant | 8 | 0 | The study reports a compartmental PK model for cibenzoline in rats, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | Tamura_2009 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel effects, not a pharmacokinetic study, and reports no disposition parameters for cibenzoline. |
| popPK | Wu_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anticholinergic effects on ion channels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Yamakawa_2012 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of cibenzoline's effect on NCX currents in isolated myocytes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Yamamoto_1999 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | Yamamoto_1999 | not_relevant | 0 | 0 | The paper focuses on in vitro receptor binding characteristics (Ki, Bmax) of class I antiarrhythmics, not in vivo pharmacodynamic exposure-response or dose-response relationships. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
