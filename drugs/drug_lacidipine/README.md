<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;lacidipine&quot;}]"></div>

# lacidipine

- **generic name:** lacidipine
- **ATC codes:** `C08CA09`
- **DrugBank:** [DB09236](https://go.drugbank.com/drugs/DB09236) · **PubChem:** [CID 5311217](https://pubchem.ncbi.nlm.nih.gov/compound/5311217)
- **molar mass:** 455.551 g/mol (C26H33NO6) — DrugBank
- **groups:** approved, investigational

## About

Lacidipine is a calcium channel blocker used to treat high blood pressure. It is an approved medicine, though not authorised centrally in the European Union, and has also been studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1163827](https://www.wikidata.org/wiki/Q1163827) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 09:06 | 22:04 | 0/0/0 | 0/0/0 | 0/0/0 | 58,599/3,837 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/1 | 0/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lacidipine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CACNA1C (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 45 matched, 44 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hall_1991.pdf` | Hall ST et al., The pharmacokinetic and pharmacodynamic…, Journal of cardiovascular p… (1991) | popPK | 8 | [10.1097/00005344-199102001-00003](https://doi.org/10.1097/00005344-199102001-00003) | [1725444](https://pubmed.ncbi.nlm.nih.gov/1725444) | The study reports PK parameters for lacidipine, but the evidence only provides percentage changes in Cmax and AUC relative to placebo, lacking the absolute numeric values for clearance, volume, or half-life required for extraction. |
| `Yang_2017.pdf` | Yang B et al., Virtual population pharmacokinetic usin…, Asian journal of pharmaceut… (2017) | popPK | 8 | [10.1016/j.ajps.2016.03.003](https://doi.org/10.1016/j.ajps.2016.03.003) | [32104318](https://pubmed.ncbi.nlm.nih.gov/32104318) | The study is a PK/PBPK modeling study for lacidipine in dogs, but the evidence text only reports qualitative bioequivalence results and design details without listing specific numeric PK parameter values (CL, V, ka, etc.). |
| `Angelico_1999.pdf` | Angelico P et al., Vascular-selective effect of lercanidip…, The Journal of pharmacy and… (1999) | pd | 4 | [10.1211/0022357991772844](https://doi.org/10.1211/0022357991772844) | [10454048](https://www.ncbi.nlm.nih.gov/pubmed/10454048) | metadata signals extractable PD data (IC50) |
| `Argan_2022.pdf` | Argan O et al., In vitro effects of thirty-eight cardia…, Chemical biology & drug des… (2022) | pd | 4 | [10.1111/cbdd.14054](https://doi.org/10.1111/cbdd.14054) | [35395139](https://www.ncbi.nlm.nih.gov/pubmed/35395139) | metadata signals extractable PD data (IC50) |
| `Bezemer_2022.pdf` | Bezemer B et al., The calcium channel inhibitor lacidipin…, Antiviral research (2022) | pd | 4 | [10.1016/j.antiviral.2022.105313](https://doi.org/10.1016/j.antiviral.2022.105313) | [35367280](https://www.ncbi.nlm.nih.gov/pubmed/35367280) | metadata signals extractable PD data (IC50) |
| `Cominacini_1999.pdf` | Cominacini L et al., Comparative effects of different dihydr…, Journal of hypertension (1999) | pd | 4 | [10.1097/00004872-199917121-00009](https://doi.org/10.1097/00004872-199917121-00009) | [10703877](https://www.ncbi.nlm.nih.gov/pubmed/10703877) | metadata signals extractable PD data (IC50) |
| `Godfraind_1991.pdf` | Godfraind T et al., Functional interaction of lacidipine wi…, Journal of cardiovascular p… (1991) | pd | 4 | [10.1097/00005344-199102001-00001](https://doi.org/10.1097/00005344-199102001-00001) | [1725443](https://www.ncbi.nlm.nih.gov/pubmed/1725443) | metadata signals extractable PD data (IC50) |
| `Martinuc_2000.pdf` | Martinuc J et al., Action of mibefradil and lacidipine on…, Pflugers Archiv : European… (2000) | pd | 4 | not captured | [11005648](https://www.ncbi.nlm.nih.gov/pubmed/11005648) | metadata signals extractable PD data (IC50) |
| `Martinuč_2000.pdf` | Martinuč J et al., Action of mibefradil and lacidipine on…, Pflugers Archiv : European… (2000) | pd | 4 | [10.1007/s004240000041](https://doi.org/10.1007/s004240000041) | [28008517](https://www.ncbi.nlm.nih.gov/pubmed/28008517) | metadata signals extractable PD data (IC50) |
| `Pijl_1993.pdf` | Pijl AJ et al., Hemodynamic and antiischemic effects of…, Journal of cardiovascular p… (1993) | pd | 4 | [10.1097/00005344-199309000-00006](https://doi.org/10.1097/00005344-199309000-00006) | [7504127](https://www.ncbi.nlm.nih.gov/pubmed/7504127) | metadata signals extractable PD data (EC50) |
| `Spampinato_1993.pdf` | Spampinato S et al., Ca2+ channel blocking activity of lacid…, European journal of pharmac… (1993) | pd | 4 | [10.1016/0922-4106(93)90019-6](https://doi.org/10.1016/0922-4106(93)90019-6) | [8432311](https://www.ncbi.nlm.nih.gov/pubmed/8432311) | metadata signals extractable PD data (IC50) |
| `Zhou_2014.pdf` | Zhou YT et al., Pharmacokinetic drug-drug interactions…, Therapeutics and clinical r… (2014) | pgx | 8 | [10.2147/TCRM.S55512](https://doi.org/10.2147/TCRM.S55512) | [24379677](https://www.ncbi.nlm.nih.gov/pubmed/24379677) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ziviani_2001.pdf` | Ziviani L et al., The effects of lacidipine on the steady…, British journal of clinical… (2001) | pgx | 7 | [10.1111/j.1365-2125.2001.bcp119.x](https://doi.org/10.1111/j.1365-2125.2001.bcp119.x) | [11259986](https://www.ncbi.nlm.nih.gov/pubmed/11259986) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-29T09:03:55.826982+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Angelico_1999 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Angelico_1999 | not_relevant | 0 | 0 | The paper studies lercanidipine, not lacidipine, and focuses on isolated tissue pharmacology rather than in vivo exposure-response or PK/PD modeling. |
| popPK | Aouam_2003 | irrelevant | 0 | 0 | The paper is a narrative review of dihydropyridine generations and contains no original quantitative pharmacokinetic parameters for lacidipine. |
| PD | Aouam_2003 | not_relevant | 1 | 0 | The text is a qualitative review of dihydropyridine generations and does not report any numeric pharmacodynamic parameters or exposure-response data for lacidipine. |
| popPK | Argan_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (PON1) and does not report pharmacokinetic disposition parameters for lacidipine. |
| PGx | Bernard_2014 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety in a pediatric population but does not investigate the impact of specific gene variants or genotypes on lacidipine pharmacokinetics or pharmacodynamics. |
| PGx | Bernard_2014_2 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between cyclosporine and calcium channel blockers, not a pharmacogenomic effect of a gene variant on lacidipine. |
| popPK | Bezemer_2022 | irrelevant | 0 | 0 | The study is an in-vitro antiviral mechanism study reporting IC50 values, not a pharmacokinetic study with disposition parameters. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any quantitative pharmacokinetic parameters for lacidipine. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain specific data, models, or numeric parameters for lacidipine. |
| popPK | Cagalinec_2006 | irrelevant | 0 | 0 | The study focuses on cardiomyocyte remodeling and contractility in rats, not pharmacokinetic disposition parameters for lacidipine. |
| popPK | Cominacini_1999 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PD | Cominacini_1999 | not_relevant | 0 | 0 | The paper focuses on the effects of dihydropyridines on adhesion molecules in an in vitro endothelial cell model and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for lacidipine in humans or animals. |
| popPK | Godfraind_1991 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| popPK | Guan_2019 | irrelevant | 2 | 0 | The study reports relative bioavailability changes (Cmax/AUC ratios) for a formulation study but does not provide quantitative compartmental PK parameters (CL, V, ka) for lacidipine. |
| PD | Guan_2019 | not_relevant | 0 | 0 | The paper focuses on formulation development, dissolution, and pharmacokinetics (Cmax, AUC) of lacidipine, but does not report any pharmacodynamic or exposure-response relationship. |
| popPK | Hall_1991 | relevant | 8 | 2 | The study reports PK parameters for lacidipine, but the evidence only provides percentage changes in Cmax and AUC relative to placebo, lacking the absolute numeric values for clearance, volume, or half-life required for extraction. |
| PD | Hall_1991 | not_relevant | 3 | 2 | The paper reports qualitative changes in blood pressure and heart rate (e.g., 6 mmHg reduction) but does not provide a concentration-effect model, Emax/EC50 parameters, or a derivable PD curve. |
| popPK | Hall_1991_2 | irrelevant | 2 | 0 | The text describes qualitative pharmacokinetic properties (hepatic metabolism, low bioavailability) but lacks quantitative disposition parameters (CL, V, t1/2) or a compartmental model. |
| PD | Hall_1991_2 | not_relevant | 2 | 1 | The text provides only qualitative descriptions of dose-related effects and a qualitative comparison to nifedipine, without reporting specific numeric PD parameters (e.g., Emax, EC50) or quantitative concentration-effect data. |
| popPK | Hansson_1995 | irrelevant | 0 | 0 | The text is a general discussion on dose-response optimization and does not report any quantitative pharmacokinetic parameters for lacidipine. |
| PD | Hansson_1995 | not_relevant | 1 | 0 | The text is a qualitative review discussing the concept of dose-response curves for lacidipine but does not present any specific numeric PD parameters, data, or curves. |
| popPK | Kataria_2022 | irrelevant | 2 | 0 | The study reports relative bioavailability and formulation characteristics but lacks quantitative compartmental PK parameters (CL, V, ka) for lacidipine. |
| PD | Kataria_2022 | not_relevant | 1 | 0 | The paper reports a comparative bioavailability and qualitative antihypertensive effect between formulations but does not provide numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50) for lacidipine. |
| popPK | Lee_1994 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties but the provided evidence contains no quantitative PK parameter values (CL, V, t1/2, etc.) for lacidipine. |
| PD | Lee_1994 | not_relevant | 2 | 1 | The text is a qualitative review summarizing clinical efficacy and dose ranges without providing specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect data. |
| popPK | Martinuc_2000 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| popPK | Martinuč_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium channel antagonism in isolated arteries, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Mayer_1995 | irrelevant | 0 | 0 | The paper is a review of calcium channel blockers that mentions lacidipine only as a third-generation agent without providing any quantitative pharmacokinetic parameters. |
| PD | Mayer_1995 | not_relevant | 1 | 0 | The text is a qualitative review of calcium channel blockers that mentions lacidipine only in the context of drug generations and general side effects, without providing any numeric PD parameters or exposure-response data. |
| popPK | Meredith_2000 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy (blood pressure reduction) and contains no pharmacokinetic parameters or disposition data for lacidipine. |
| PD | Meredith_2000 | not_relevant | 3 | 2 | The paper is a meta-analysis reporting qualitative dose-response trends and aggregate blood pressure reductions, but it does not provide specific numeric PD parameters (e.g., EC50, Emax) or individual concentration-effect data. |
| popPK | Pijl_1993 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Qumbar_2017 | irrelevant | 1 | 0 | The study focuses on formulation optimization and in-vitro/ex-vivo permeation, reporting no quantitative population pharmacokinetic parameters (CL, V, ka) for lacidipine. |
| PD | Qumbar_2017 | not_relevant | 2 | 1 | The paper reports a qualitative comparison of in-vivo antihypertensive activity (blood pressure reduction) between formulations but does not provide numeric PD parameters (Emax, EC50) or an exposure-response/dose-response curve. |
| popPK | Rizzini_1991 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study in elderly hypertensive patients and does not report quantitative pharmacokinetic parameters for lacidipine. |
| PD | Rizzini_1991 | not_relevant | 3 | 0 | The paper describes clinical efficacy and dose-response trends (2mg vs 4mg) but does not provide numeric PD parameters (Emax, EC50) or concentration-effect data. |
| popPK | Salomone_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of radioligand binding and functional effects in rat aorta, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Salomone_1997 | irrelevant | 0 | 0 | The study is a pharmacological investigation of vascular contractility in rats where lacidipine is used only as a tool compound to reverse tone, not as a subject for pharmacokinetic analysis. |
| PD | Salomone_1997 | not_relevant | 0 | 0 | The paper studies the role of nitric oxide in 5-HT-induced contraction in rat arteries; lacidipine is only mentioned as a calcium channel blocker used to reverse L-NOARG-induced tone, with no exposure-response or dose-response analysis for lacidipine itself. |
| popPK | Sharma_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on OXPHOS inhibition and cell viability in cancer cells, not a pharmacokinetic study, and reports no disposition parameters for lacidipine. |
| popPK | Sidorenko_2002 | irrelevant | 1 | 0 | The paper is a review discussing pharmacodynamics and clinical experience, mentioning only a qualitative half-life without reporting quantitative population PK parameters like clearance or volume. |
| PD | Sidorenko_2002 | not_relevant | 2 | 0 | The text is a qualitative review discussing the mechanism of action and clinical outcomes (ELSA study) without providing specific numeric PD parameters or concentration-effect data. |
| popPK | Spampinato_1993 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| popPK | Viguier_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse drug reaction signatures and does not report any pharmacokinetic parameters for lacidipine. |
| PD | Viguier_2024 | not_relevant | 0 | 0 | The paper analyzes adverse drug reaction signatures using pharmacovigilance data (VigiBase) and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for lacidipine. |
| PGx | Xia_2012 | not_relevant | 0 | 0 | The study investigates the inhibitory effects of lacidipine on CYP3A4 activity in vitro and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Yang_2017 | relevant | 8 | 2 | The study is a PK/PBPK modeling study for lacidipine in dogs, but the evidence text only reports qualitative bioequivalence results and design details without listing specific numeric PK parameter values (CL, V, ka, etc.). |
| popPK | Zhang_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects (vasodilation and blood pressure) of a lacidipine analogue (CZ454) in vitro and in vivo, without reporting any pharmacokinetic parameters for lacidipine. |
| PGx | Zhou_2014 | not_relevant | 1 | 0 | The paper is a review of drug-drug interactions between DHP-CCBs and statins; it mentions lacidipine only as an example of a DDI pair and does not report specific pharmacogenomic effects on its PK/PD parameters. |
| PGx | Ziviani_2001 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (lacidipine affecting simvastatin PK) in healthy subjects without analyzing any genetic variants or pharmacogenomic factors. |
| popPK | van_1993 | irrelevant | 0 | 0 | The paper is a pharmacological review discussing general characteristics of calcium antagonists and does not report quantitative pharmacokinetic parameters for lacidipine. |
| PD | van_1993 | not_relevant | 1 | 0 | The text is a qualitative review of calcium antagonist classes and does not provide specific numeric PD parameters or exposure-response data for lacidipine. |
| popPK | van_1993_2 | irrelevant | 1 | 0 | The paper is a mechanistic review discussing the relationship between lipophilicity and pharmacodynamic responses, lacking quantitative pharmacokinetic parameters (CL, V, ka) for lacidipine. |
| PD | van_1993_2 | not_relevant | 2 | 0 | The text is a qualitative review discussing the pharmacological properties of lacidipine (lipophilicity, onset, duration) without providing any numeric PD parameters, concentration-effect curves, or quantitative exposure-response data. |
| popPK | van_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of vasodilator potency and time course in rat mesenteric arteries, not a pharmacokinetic study reporting disposition parameters for lacidipine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
