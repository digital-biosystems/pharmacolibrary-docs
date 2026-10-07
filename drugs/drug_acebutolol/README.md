<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;acebutolol&quot;}]"></div>

# acebutolol

- **generic name:** acebutolol
- **ATC codes:** `C07AB04`, `C07BB04`
- **DrugBank:** [DB01193](https://go.drugbank.com/drugs/DB01193) · **PubChem:** [CID 1978](https://pubchem.ncbi.nlm.nih.gov/compound/1978)
- **molar mass:** 336.4259 g/mol (C18H28N2O4) — DrugBank
- **groups:** approved, investigational

## About

Acebutolol is a selective beta blocker used to treat high blood pressure, angina, and heart rhythm problems. It is an approved medicine and remains in use, though it is not authorised at the European Union level.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418857](https://www.wikidata.org/wiki/Q418857) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:03 | 3:19 | 0/0/0 | 2/2/1 | 0/0/0 | 144,369/3,272 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 9/2 | 4/6 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">other organism</span> | [Oualha_2024_amastigote_viability](drugs/drug_acebutolol/pd_Oualha_2024_amastigote_viability.md) | amastigote viability ← Acebutolol · direct sigmoid Emax (Hill) effect | — | Oualha R et al., Approved drugs successfully repurposed…, Frontiers in cellular and i… (2024) | [10.3389/fcimb.2024.1403589](https://doi.org/10.3389/fcimb.2024.1403589) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">other organism</span> | [Oualha_2024_promastigote_viability](drugs/drug_acebutolol/pd_Oualha_2024_promastigote_viability.md) | promastigote viability ← Acebutolol · direct sigmoid Emax (Hill) effect | — | Oualha R et al., Approved drugs successfully repurposed…, Frontiers in cellular and i… (2024) | [10.3389/fcimb.2024.1403589](https://doi.org/10.3389/fcimb.2024.1403589) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Singh_1985_reduced](drugs/drug_acebutolol/pd_Singh_1985_reduced.md) | reduced ← acebutolol · disease-progression model | — | Singh BN et al., Acebutolol. A review of its pharmacolog…, Drugs (1985) | [10.2165/00003495-198529060-00003](https://doi.org/10.2165/00003495-198529060-00003) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Abrahamsson_1989_atrial_rate](drugs/drug_acebutolol/pd_Abrahamsson_1989_atrial_rate.md) | atrial rate ← acebutolol · direct Emax (saturable) effect | — | Abrahamsson T, Characterization of the beta 1-adrenoce…, European journal of pharmac… (1989) | [10.1016/0014-2999(89)90238-0](https://doi.org/10.1016/0014-2999(89)90238-0) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Fleurot_1991_percent_reduction_in_heart_rate_during_exercise](drugs/drug_acebutolol/pd_Fleurot_1991_percent_reduction_in_heart_rate_during_exercise.md) | percent reduction in heart rate during exercise ← acebutolol · direct log-linear effect | — | Fleurot O et al., A comparative pharmacokinetic and pharm…, Fundamental & clinical phar… (1991) | [10.1111/j.1472-8206.1991.tb00749.x](https://doi.org/10.1111/j.1472-8206.1991.tb00749.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Klug_1994_Dys](drugs/drug_acebutolol/pd_Klug_1994_Dys.md) | dysmorphogenesis ← acebutolol · direct Emax (saturable) effect | — | Klug S et al., Toxicity of beta-blockers in a rat whol…, Archives of toxicology (1994) | [10.1007/s002040050085](https://doi.org/10.1007/s002040050085) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=acebutolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRB1 (partial agonist), ADRB2 (partial agonist).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 48 returned
- **screened:** 5  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Neuhoff_2000.pdf` | Neuhoff S et al., Affinities at the verapamil binding sit…, International journal of cl… (2000) | pd | 4 | [10.5414/cpp38168](https://doi.org/10.5414/cpp38168) | [10783826](https://www.ncbi.nlm.nih.gov/pubmed/10783826) | metadata signals extractable PD data (IC50) |
| `Sawutz_1985.pdf` | Sawutz DG et al., Characterization of monoclonal antibodi…, Journal of immunology (Balt… (1985) | pd | 4 | not captured | [2993414](https://www.ncbi.nlm.nih.gov/pubmed/2993414) | metadata signals extractable PD data (IC50) |
| `Street_1984.pdf` | Street JA et al., Inhibition of synaptosomal [3H]noradren…, European journal of pharmac… (1984) | pd | 4 | [10.1016/0014-2999(84)90263-2](https://doi.org/10.1016/0014-2999(84)90263-2) | [6148250](https://www.ncbi.nlm.nih.gov/pubmed/6148250) | metadata signals extractable PD data (IC50) |
| `Stupack_1999.pdf` | Stupack DG et al., Heterogeneity among beta-adrenoreceptor…, Canadian journal of physiol… (1999) | pd | 4 | not captured | [10537226](https://www.ncbi.nlm.nih.gov/pubmed/10537226) | metadata signals extractable PD data (IC50) |
| `Maideen_2021.pdf` | Maideen NMP et al., A Review on Pharmacokinetic and Pharmac…, Current drug metabolism (2021) | pgx | 7 | [10.2174/1389200222666210614112529](https://doi.org/10.2174/1389200222666210614112529) | [34182907](https://www.ncbi.nlm.nih.gov/pubmed/34182907) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-06T23:00:23.702223+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abrahamsson_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of beta-adrenoceptor affinity and efficacy in rat atria, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Beresford_1986 | irrelevant | 0 | 0 | The paper is a review of betaxolol, and acebutolol is only mentioned as a comparator drug without any specific pharmacokinetic parameter values reported for it. |
| PD | Beresford_1986 | not_relevant | 2 | 1 | The paper is a review of betaxolol; acebutolol is only mentioned as a comparator in qualitative statements (e.g., 'more effective than acebutolol') without providing specific numeric PD parameters or concentration-effect data for acebutolol. |
| popPK | Capponi_1977 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of renin release from rat kidney slices and does not report any pharmacokinetic parameters for acebutolol. |
| popPK | Chou_2023 | irrelevant | 0 | 0 | The study investigates the cutaneous analgesic effects of beta-blockers in rats and does not report pharmacokinetic parameters for acebutolol. |
| PD | Collins_1975 | not_relevant | 2 | 0 | The text mentions a pharmacodynamic study correlating beta-blockade with plasma levels but provides no numeric PD parameters, effect magnitudes, or concentration-effect data, focusing instead on PK and metabolism. |
| popPK | Dhalla_1976 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on calcium uptake and ATPase activity in subcellular fractions, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Escoubet_1986 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of beta-blockers using ECG recordings and does not report pharmacokinetic parameters for acebutolol. |
| popPK | Fleurot_1991 | relevant | 8 | 2 | The paper is a relevant PK study of acebutolol, but the provided evidence contains only qualitative comparisons and relative bioavailability statements without specific numeric values for clearance, volume, or half-life. |
| popPK | Frais_1985 | irrelevant | 1 | 0 | The study is a haemodynamic comparison focusing on blood pressure and heart rate effects, reporting only plasma concentrations without any pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Först_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of membrane interactions using fluorescence and simulations, reporting no pharmacokinetic parameters. |
| PD | Först_2014 | not_relevant | 0 | 0 | The paper investigates biophysical interactions with lipid membranes using fluorescence and simulations, not pharmacodynamic exposure-response relationships or dose-effect curves for clinical endpoints. |
| popPK | Gribbin_1981 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of bronchial and cardiac beta-adrenoceptor blockade, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for acebutolol. |
| popPK | Gülker_1981 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of hemodynamic effects in dogs and does not report any pharmacokinetic parameters for acebutolol. |
| popPK | Harrison_1987 | irrelevant | 2 | 1 | This is a review article that discusses pharmacokinetic properties qualitatively and provides only general ranges for half-life and bioavailability in a comparison table, lacking specific quantitative disposition parameters (CL, V, Q, ka) or a compartmental model for acebutolol. |
| PD | Harrison_1987 | not_relevant | 1 | 0 | The text is a review discussing general pharmacokinetic and pharmacodynamic properties of beta-blockers without providing specific numeric PD parameters or exposure-response data for acebutolol. |
| popPK | Harry_1989 | irrelevant | 0 | 0 | The paper is a review of epanolol's pharmacodynamics, and acebutolol is only mentioned as a comparator for intrinsic activity without any pharmacokinetic parameters. |
| PD | Harry_1989 | not_relevant | 1 | 0 | The text is a qualitative review of epanolol's pharmacodynamics and only mentions acebutolol for relative comparison without providing any numeric PD parameters or exposure-response data. |
| popPK | Hirosawa_2023 | irrelevant | 2 | 0 | The study focuses on drug-drug interactions and enzyme inhibition (Ki) of acebutolol by orlistat, reporting only AUC changes rather than standard quantitative disposition parameters like clearance, volume, or half-life. |
| PD | Hirosawa_2023 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (Ki) and in vivo PK changes (AUC) due to drug-drug interaction, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for acebutolol. |
| popPK | Kendall_1984 | irrelevant | 2 | 0 | The study reports only qualitative changes in AUC and Cmax for acebutolol without providing specific quantitative PK parameter values (CL, V, ka, etc.). |
| PD | Kendall_1984 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (AUC, Cmax) affected by oral contraceptives and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Klug_1994 | irrelevant | 0 | 0 | The study is an in vitro embryotoxicity assay measuring drug concentrations in rat embryos, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Kober_1982 | irrelevant | 1 | 0 | The study reports pharmacodynamic effects (heart rate, ST-segment) rather than quantitative pharmacokinetic parameters (CL, V, ka). |
| popPK | Kumar_2023 | irrelevant | 0 | 0 | The study focuses on the repurposing of telmisartan for breast cancer using in-silico and in-vitro methods, with acebutolol serving only as a comparator ligand in virtual screening without any pharmacokinetic data. |
| PD | Kumar_2023 | not_relevant | 0 | 0 | The paper focuses on telmisartan and does not report any pharmacodynamic or exposure-response data for acebutolol. |
| popPK | Lemmer_1982 | irrelevant | 1 | 0 | The paper is a general review of beta-blockers that only qualitatively categorizes acebutolol's half-life range without providing specific quantitative PK parameters or compartmental model values. |
| PD | Lemmer_1982 | not_relevant | 1 | 0 | The text is a general review discussing the pharmacological properties of beta-blockers, including acebutolol, but it does not report specific numeric PD parameters (Emax, EC50) or an extractable concentration-effect curve for acebutolol. |
| popPK | Lumley_1977 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of adrenoceptor subtypes using guinea-pig atria, reporting pA2 values for antagonism rather than pharmacokinetic disposition parameters for acebutolol. |
| popPK | MacGregor_1983 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on blood pressure and metabolic effects, not a pharmacokinetic study, and contains no PK parameters for acebutolol. |
| PD | MacGregor_1983 | not_relevant | 3 | 2 | The paper reports a qualitative "flat dose response" for thiazide in the presence of acebutolol but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve for acebutolol itself. |
| popPK | Magder_1983 | irrelevant | 1 | 0 | The study focuses on hemodynamic effects and relative concentrations for equipotent blocking doses in dogs, without reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for acebutolol. |
| popPK | Maideen_2021 | irrelevant | 0 | 0 | The paper is a review of drug interactions without original quantitative pharmacokinetic parameter values for acebutolol. |
| PD | Maideen_2021 | not_relevant | 1 | 0 | The paper is a qualitative review of drug interactions and does not report specific numeric PD parameters or concentration-effect curves for acebutolol. |
| PGx | Maideen_2021 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions, not pharmacogenomic effects on acebutolol. |
| popPK | Marie_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cardioprotection in isolated guinea pig hearts and does not report pharmacokinetic parameters for acebutolol. |
| PD | Marie_1989 | not_relevant | 2 | 2 | The paper reports a single-dose comparative study of cardioprotection (stroke volume recovery) rather than a dose-response or exposure-response relationship with derived PD parameters like Emax or EC50. |
| popPK | Neuhoff_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P-glycoprotein binding affinities (IC50) and does not report pharmacokinetic disposition parameters for acebutolol. |
| PD | Neuhoff_2000 | not_relevant | 0 | 0 | The paper reports in vitro P-glycoprotein binding affinities (IC50) for acebutolol and its metabolite, which is a pharmacokinetic/transporter interaction study, not a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| popPK | Oualha_2024 | irrelevant | 0 | 0 | The paper is an in-vitro study on the anti-Leishmania activity of acebutolol, reporting IC50 values rather than pharmacokinetic parameters. |
| PGx | PMID38951961_2024 | not_relevant | 0 | 0 | The paper discusses beta-blockers generally and specifically metoprolol, but explicitly states there is insufficient evidence for CYP2D6 and other beta-blockers (including acebutolol) or for the other genes evaluated. |
| popPK | Pringle_1987 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of cardioselectivity and does not report any pharmacokinetic parameters for acebutolol. |
| popPK | Puşcas_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of carbonic anhydrase activity and does not report any pharmacokinetic parameters for acebutolol. |
| PGx | Rouby_1982 | not_relevant | 0 | 0 | The paper discusses clinical resistance to sodium nitroprusside and the use of acebutolol as a rescue therapy, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD of acebutolol. |
| popPK | Sakuta_1992 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel blockade in Xenopus oocytes and does not report pharmacokinetic parameters for acebutolol. |
| popPK | Sawutz_1985 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | Sawutz_1985 | not_relevant | 0 | 0 | The paper focuses on the characterization of monoclonal antibodies to alprenolol as receptor binding models, not on the pharmacodynamics or exposure-response of acebutolol. |
| popPK | Schliep_1984 | irrelevant | 0 | 0 | The study focuses on the beta-adrenoceptor selectivity of bisoprolol, with acebutolol serving only as a comparator for receptor activity rather than being the subject of a pharmacokinetic analysis. |
| PD | Schliep_1984 | not_relevant | 3 | 2 | The paper reports beta-selectivity ratios (IC50 ratios) for acebutolol but does not provide the underlying concentration-effect curves or specific PD parameters (like Emax or absolute IC50) for acebutolol itself, focusing instead on bisoprolol. |
| popPK | Scott_1995 | relevant | 9 | 0 | The paper describes a PKPD study of acebutolol with quantitative modeling, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Silke_1984 | irrelevant | 1 | 0 | The study is a comparative haemodynamic dose-response trial that does not report quantitative pharmacokinetic parameters (e.g., clearance, volume) for acebutolol. |
| PD | Silke_1984 | not_relevant | 3 | 2 | The paper reports qualitative comparative haemodynamic effects of single fixed doses but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (e.g., EC50, Emax) for acebutolol. |
| popPK | Silke_1984_2 | irrelevant | 2 | 0 | The study focuses on hemodynamic dose-response effects and reports plasma concentrations but does not provide quantitative pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Silke_1985 | irrelevant | 2 | 0 | The study reports hemodynamic effects and mentions plasma concentrations but does not provide quantitative pharmacokinetic parameters (CL, V, ka, etc.) for acebutolol. |
| popPK | Street_1984 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Street_1984 | not_relevant | 0 | 0 | The paper focuses on in vitro inhibition of noradrenaline uptake and lipophilicity, not in vivo pharmacodynamic or exposure-response relationships for acebutolol. |
| popPK | Stupack_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of renal tubule uptake inhibition, not a pharmacokinetic study reporting disposition parameters for acebutolol. |
| PD | Stupack_1999 | not_relevant | 4 | 3 | The paper reports IC50 values for propranolol, but explicitly states that acebutolol did not show dose-dependent inhibition, so no numeric PD parameters are available for the target drug. |
| popPK | Thomas_1986 | irrelevant | 0 | 0 | The study assesses beta-adrenoceptor selectivity and pharmacodynamic effects (heart rate, airway conductance) rather than reporting quantitative pharmacokinetic disposition parameters for acebutolol. |
| PD | Thomas_1986 | not_relevant | 3 | 2 | The study reports comparative pharmacodynamic effects (heart rate reduction and dose ratios) at fixed doses, but does not provide concentration-effect data, PK parameters, or a fitted PD model with numeric parameters like Emax or EC50. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
