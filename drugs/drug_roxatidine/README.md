<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;roxatidine&quot;}]"></div>

# roxatidine

- **generic name:** roxatidine
- **ATC codes:** `A02BA06`
- **DrugBank:** [DB08806](https://go.drugbank.com/drugs/DB08806) · **PubChem:** [CID 5105](https://pubchem.ncbi.nlm.nih.gov/compound/5105)
- **molar mass:** 348.4366 g/mol (C19H28N2O4) — DrugBank
- **groups:** investigational

## About

Roxatidine is an H2-receptor antagonist developed as an anti-ulcer drug for acid-related disorders such as peptic ulcer and gastro-oesophageal reflux disease. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20077596](https://www.wikidata.org/wiki/Q20077596) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:23 | 2:09 | 0/0/1 | 0/0/0 | 0/0/0 | 62,383/3,065 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Gladziwa_1995_reference](drugs/drug_roxatidine/Roxatidine_Gladziwa1995_reference.md) | — | 1-compartment (no model) | 1 | Gladziwa U et al., Pharmacokinetics and pharmacodynamics o…, British journal of clinical… (1995) | [10.1111/j.1365-2125.1995.tb04423.x](https://doi.org/10.1111/j.1365-2125.1995.tb04423.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=roxatidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HRH2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 46 matched, 62 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tsutsumi_2001.pdf` | Tsutsumi M et al., Pharmacokinetics of roxatidine acetate…, Journal of gastroenterology… (2001) | popPK | 10 | [10.1046/j.1440-1746.2001.02535.x](https://doi.org/10.1046/j.1440-1746.2001.02535.x) | [11555106](https://pubmed.ncbi.nlm.nih.gov/11555106) | The study reports pharmacokinetic parameters for roxatidine in humans, but the specific numeric values are not present in the provided abstract text. |
| `Nakamura_2012.pdf` | Nakamura H et al., Pharmacokinetics of the H(2) blocker ro…, Drug metabolism and pharmac… (2012) | popPK | 9 | [10.2133/dmpk.dmpk-11-rg-112](https://doi.org/10.2133/dmpk.dmpk-11-rg-112) | [22293541](https://pubmed.ncbi.nlm.nih.gov/22293541) | The paper reports quantitative PK parameters (CL/F, Vd/F) for roxatidine in humans, but the specific numeric values are not present in the provided evidence text. |
| `Chen_1990.pdf` | Chen WW et al., [Plasma pharmacokinetics of roxatidine…, Gastroenterologie clinique… (1990) | popPK | 8 | not captured | [1972124](https://pubmed.ncbi.nlm.nih.gov/1972124) | The study reports pharmacokinetics of roxatidine (active metabolite) in humans and mentions a 6-hour half-life, but specific quantitative parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| `Lassman_1988.pdf` | Lassman HB et al., The pharmacodynamics and pharmacokineti…, Drugs 35 Suppl (1988) | popPK | 8 | [10.2165/00003495-198800353-00011](https://doi.org/10.2165/00003495-198800353-00011) | [2905250](https://pubmed.ncbi.nlm.nih.gov/2905250) | The study reports pharmacokinetics of the active desacetyl metabolite of roxatidine in humans, but no specific numeric parameter values (CL, V, t1/2, etc.) are present in the provided text. |
| `Li_2022.pdf` | Li X et al., Pharmacokinetics and Bioequivalence Stu…, Clinical pharmacology in dr… (2022) | popPK | 8 | [10.1002/cpdd.1053](https://doi.org/10.1002/cpdd.1053) | [34978388](https://pubmed.ncbi.nlm.nih.gov/34978388) | The study reports pharmacokinetic parameters for roxatidine (the active metabolite of the prodrug roxatidine acetate) in humans, but the specific numeric values are not present in the provided evidence text. |
| `Lin_1991.pdf` | Lin JH, Pharmacokinetic and pharmacodynamic pro…, Clinical pharmacokinetics (1991) | pd | 5 | [10.2165/00003088-199120030-00004](https://doi.org/10.2165/00003088-199120030-00004) | [1673880](https://www.ncbi.nlm.nih.gov/pubmed/1673880) | metadata signals extractable PD data (IC50) |
| `Sasaki_2001.pdf` | Sasaki M et al., Cytochrome P450 enzymes involved in the…, Arzneimittel-Forschung (2001) | pgx | 7 | [10.1055/s-0031-1300096](https://doi.org/10.1055/s-0031-1300096) | [11556126](https://www.ncbi.nlm.nih.gov/pubmed/11556126) | metadata signals extractable PGX data (CYP2A1, PK/PD-context) |

<sub>queue written 2026-10-04T12:22:43.331567+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agrawal_2011 | irrelevant | 0 | 0 | The study evaluates the anti-ovulatory pharmacodynamic activity of roxatidine in rabbits and does not report any pharmacokinetic parameters. |
| popPK | Audibert_1991 | irrelevant | 0 | 0 | The study measures cerebral blood flow in dogs to assess the physiological effects of H2-blockers, not the pharmacokinetic disposition parameters (CL, V, etc.) of roxatidine. |
| popPK | Bender_1989 | irrelevant | 2 | 0 | The paper is a review of pharmacokinetic studies and the provided evidence contains no specific numeric parameter values (CL, V, t1/2, etc.). |
| popPK | Bonfils_1988 | irrelevant | 2 | 0 | The study is a pharmacodynamic dose-response assessment of acid secretion inhibition, reporting only peak concentration timing and ED50, without providing quantitative pharmacokinetic parameters like clearance, volume, or half-life. |
| popPK | Büyüktimkin_1991 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and pharmacological activity (H1/H2 antagonism) of new compounds, not a pharmacokinetic study of roxatidine. |
| popPK | Chen_1990 | relevant | 8 | 2 | The study reports pharmacokinetics of roxatidine (active metabolite) in humans and mentions a 6-hour half-life, but specific quantitative parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| PD | Chen_1990 | not_relevant | 4 | 2 | The paper describes a correlation between peak concentration and effect in a small cohort but does not provide numeric PD parameters (Emax, EC50) or a quantitative dose-response curve in the text. |
| popPK | Choi_2000 | irrelevant | 0 | 0 | Roxatidine is used only as an internal standard for the analysis of cetirizine, not as the subject drug for PK parameter estimation. |
| popPK | Ciacci_1996 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of cell proliferation and migration, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Collins_1988 | irrelevant | 2 | 0 | The paper is explicitly a review of previous studies and does not report original quantitative disposition parameters (CL, V, Q) for roxatidine, only qualitative descriptions and limited metrics like tmax and half-life. |
| popPK | Dammann_1988 | irrelevant | 0 | 0 | The paper is a clinical review focusing on pharmacodynamics and efficacy, containing no quantitative pharmacokinetic parameters (CL, V, t1/2) for roxatidine. |
| PD | Dammann_1988 | not_relevant | 2 | 1 | The text is a qualitative review that mentions optimal doses and relative potency but does not provide numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Freston_1990 | irrelevant | 0 | 0 | The paper is a clinical review of peptic ulcer disease therapy and does not report any pharmacokinetic parameters for roxatidine. |
| popPK | Fujino_1995 | irrelevant | 0 | 0 | The study is a clinical trial evaluating ulcer healing rates and H. pylori clearance, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Garbis_2005 | irrelevant | 0 | 0 | The study is a teratogenicity/pregnancy outcome assessment and does not report any pharmacokinetic parameters for roxatidine. |
| popPK | Greve_2002 | irrelevant | 0 | 0 | The paper is a dermatology case study regarding laser treatment of lichenoid dermatitis, with roxatidine mentioned only as a potential cause of the condition, not as a subject of pharmacokinetic analysis. |
| PD | Gugler_1994 | not_relevant | 1 | 0 | The text is a review discussing the interaction between H2-antagonists and alcohol metabolism, stating that roxatidine did not show an effect on gastric alcohol first-pass metabolism, but it provides no numeric PD parameters, concentration-effect curves, or dose-response data for roxatidine. |
| popPK | Hashimoto_2007 | irrelevant | 0 | 0 | The study evaluates the pharmacodynamic efficacy (gastric pH and volume) of roxatidine, not its pharmacokinetic parameters. |
| PD | Hentschel_1988 | not_relevant | 0 | 0 | The paper is a clinical efficacy trial comparing two dosing regimens and reports healing rates and pain scores, but it does not provide pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., EC50, Emax). |
| popPK | Hirota_1999 | irrelevant | 0 | 0 | The study focuses on the relationship between bispectral index and catecholamines after diazepam premedication, with roxatidine serving only as a co-administered agent without any pharmacokinetic parameter reporting. |
| popPK | Hirota_2005 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing gastric pH and volume, not a pharmacokinetic study, and reports no PK parameters for roxatidine. |
| popPK | Hirota_2011 | irrelevant | 0 | 0 | The study is a clinical trial comparing the antisecretory effects of roxatidine and rabeprazole on gastric pH and volume, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ivanov_1996 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects (gastroprotective, antisecretory) of a new bismuth complex (MX1) and roxatidine, reporting no quantitative pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Iwagami_2021 | irrelevant | 0 | 0 | The study is a claims database analysis of cancer risk and does not report any pharmacokinetic parameters for roxatidine. |
| popPK | Labs_1988 | irrelevant | 2 | 0 | The study focuses on drug interactions and bioavailability of roxatidine but does not report quantitative disposition parameters (CL, V, t1/2) for roxatidine itself, only stating that bioavailability was not modified. |
| popPK | Lameire_1988 | irrelevant | 2 | 0 | The paper is a review that discusses roxatidine pharmacokinetics in renal failure but does not provide specific quantitative parameter values (CL, V, t1/2) in the extracted evidence. |
| PD | Lameire_1988 | not_relevant | 1 | 0 | The text is a review of pharmacokinetics in renal failure and mentions dose reduction qualitatively but provides no numeric PD parameters or concentration-effect data. |
| popPK | Lassman_1988 | relevant | 8 | 0 | The study reports pharmacokinetics of the active desacetyl metabolite of roxatidine in humans, but no specific numeric parameter values (CL, V, t1/2, etc.) are present in the provided text. |
| PD | Lassman_1988 | not_relevant | 2 | 1 | The paper reports qualitative PK/PD observations (pH increases with plasma concentration) and clinical outcomes (duration of effect, nocturnal pH) but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve. |
| popPK | Li_2022 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for roxatidine (the active metabolite of the prodrug roxatidine acetate) in humans, but the specific numeric values are not present in the provided evidence text. |
| popPK | Lin_1991 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| popPK | Merki_1988 | irrelevant | 0 | 0 | The study reports pharmacodynamic data (gastric pH changes) rather than quantitative pharmacokinetic parameters (CL, V, t1/2) for roxatidine. |
| PD | Merki_1989 | not_relevant | 2 | 1 | The text is a review summarizing qualitative findings (potency, healing rates) and dose comparisons without providing specific numeric PD parameters (Emax, EC50) or extractable concentration-effect curves. |
| popPK | Murdoch_1991 | irrelevant | 2 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties, but the provided evidence contains no quantitative disposition parameters (CL, V, t1/2, etc.) for roxatidine. |
| PD | Murdoch_1991 | not_relevant | 2 | 1 | The text is a qualitative review summarizing general pharmacodynamic properties and clinical efficacy without providing specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect data. |
| popPK | Nagai_1995 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding roxatidine pharmacokinetics. |
| popPK | Nakamura_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of platelet function, not a pharmacokinetic study, and reports no disposition parameters for roxatidine. |
| popPK | Nakamura_2012 | relevant | 9 | 0 | The paper reports quantitative PK parameters (CL/F, Vd/F) for roxatidine in humans, but the specific numeric values are not present in the provided evidence text. |
| popPK | Palileo_2011 | irrelevant | 0 | 0 | The paper is a review of gastrointestinal defense mechanisms and mentions roxatidine only mechanistically without reporting any pharmacokinetic parameters. |
| PGx | Sasaki_2001 | not_relevant | 0 | 0 | The paper identifies the CYP enzymes responsible for roxatidine metabolism but does not report any pharmacogenomic effects (e.g., genotype-based differences) on PK or PD parameters. |
| PD | Savarino_1996 | not_relevant | 3 | 2 | The study reports qualitative pharmacodynamic outcomes (gastric pH changes over time) and a lack of tolerance, but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect relationship. |
| popPK | Scholtholt_1988 | irrelevant | 2 | 0 | The paper is a review of animal pharmacology that mentions pharmacokinetic studies but does not provide any quantitative disposition parameters (CL, V, t1/2, etc.) for roxatidine. |
| popPK | Seibert-Grafe_1991 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| popPK | Shamburek_1993 | irrelevant | 0 | 0 | The paper is a review of the pharmacology of gastric acid inhibition and mentions roxatidine only as a class example without providing any quantitative pharmacokinetic parameters. |
| popPK | Tanaka_1989 | irrelevant | 0 | 0 | Roxatidine is used as a pretreatment agent to assess its effect on the pharmacokinetics of other drugs (antipyrine, trimethadione, ICG), not as the subject drug for PK parameter estimation. |
| PD | Tryba_1988 | not_relevant | 1 | 0 | The paper reports PK penetration data (CSF/plasma ratio) but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for roxatidine. |
| popPK | Tsutsumi_2001 | relevant | 10 | 0 | The study reports pharmacokinetic parameters for roxatidine in humans, but the specific numeric values are not present in the provided abstract text. |
| PD | Tsutsumi_2001 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (AUC, clearance, half-life) and their correlation with liver function markers, with no pharmacodynamic or exposure-response analysis. |
| popPK | Upton_1991 | irrelevant | 0 | 0 | The paper is a review of theophylline pharmacokinetics, and roxatidine is only listed as a drug that does not influence theophylline's disposition, with no PK parameters reported for roxatidine itself. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions affecting theophylline clearance and lists roxatidine as a drug that does not influence theophylline's disposition, rather than reporting a pharmacogenomic effect on roxatidine itself. |
| popPK | Yoshimura_1989 | irrelevant | 0 | 0 | The study investigates the effect of roxatidine on the pharmacokinetics of theophylline, not the pharmacokinetic parameters of roxatidine itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 12:22 UTC</sub>
