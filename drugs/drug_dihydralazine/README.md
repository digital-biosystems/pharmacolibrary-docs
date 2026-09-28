<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02D&quot;,&quot;href&quot;:&quot;atc/C02D.md&quot;},{&quot;label&quot;:&quot;dihydralazine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dihydralazine_Siegmund1987_reference&quot;,&quot;label&quot;:&quot;Siegmund_1987_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dihydralazine/Dihydralazine_Siegmund1987_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# dihydralazine

- **generic name:** dihydralazine
- **ATC codes:** `C02DB01`, `C02LG01`, `C02LG51`
- **DrugBank:** [DB12945](https://go.drugbank.com/drugs/DB12945) · **PubChem:** [CID 10230](https://pubchem.ncbi.nlm.nih.gov/compound/10230)
- **molar mass:** 190.21 g/mol (C8H10N6) — DrugBank
- **groups:** approved, withdrawn

## About

**Description.** Dihydralazine is under investigation in clinical trial NCT00311974 (The Effect of Dihydralazine on Kidney Function and Hormones in Healthy Individuals).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 23:08 | 11:39 | 0/1/0 | 0/0/0 | 0/0/0 | 50,644/5,787 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 1/1 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.8). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Siegmund_1987_reference](drugs/drug_dihydralazine/Dihydralazine_Siegmund1987_reference.md) | 1-compartment (no model) | 0 | Siegmund (1987) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dihydralazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor/substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 55 matched, 55 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Waller_1979.pdf` | Waller AR et al., Plasma concentrations and pharmacokinet…, Biopharmaceutics & drug dis… (1979) | popPK | 10 | [10.1002/bdd.2510010203](https://doi.org/10.1002/bdd.2510010203) | [552862](https://pubmed.ncbi.nlm.nih.gov/552862) | The evidence explicitly reports quantitative pharmacokinetic parameters for dihydralazine, including apparent half-lives (0.57 and 4.96 h) and clearance values (1.63 and 1.31 l min-1) for fast and slow acetylators. |
| `Siegmund_1987.pdf` | Siegmund W et al., [Pharmacokinetics of dihydralazine foll…, Die Pharmazie (1987) | popPK | 8 | not captured | [3432333](https://pubmed.ncbi.nlm.nih.gov/3432333) | The study reports quantitative PK parameters (half-lives, relative clearance trends, tissue distribution) for dihydralazine in animals, but specific numeric values for clearance (CL) or volume (V) are not explicitly provided in the text. |
| `Wang_2009.pdf` | Wang B et al., Synthetic and natural compounds that in…, Current medicinal chemistry (2009) | pgx | 7 | [10.2174/092986709789378198](https://doi.org/10.2174/092986709789378198) | [19754423](https://www.ncbi.nlm.nih.gov/pubmed/19754423) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-09-27T23:05:00.570572+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Arlart_1979 | not_relevant | 2 | 0 | The study describes a qualitative pharmacodynamic test (intrarenal dihydralazine effect on renal hemodynamics) to assess vascular sensitivity, but it does not report numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50, etc.). |
| PGx | Belloc_1997 | not_relevant | 0 | 0 | The paper focuses on the immunological epitope mapping of CYP1A2 in drug-induced autoimmune hepatitis, not on pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Bouthier_1985 | irrelevant | 0 | 0 | The study focuses on hemodynamic and echocardiographic parameters in hypertension, not the pharmacokinetics of dihydralazine. |
| PD | Bouthier_1985 | not_relevant | 1 | 0 | The paper compares the effects of cadralazine and nitrendipine on arterial distensibility qualitatively but does not provide numeric concentration-effect data, dose-response curves, or PD parameters for dihydralazine. |
| PGx | Dalekos_2002 | not_relevant | 0 | 0 | The paper discusses autoantibodies in autoimmune hepatitis and mentions dihydralazine-induced hepatitis only as a differential diagnosis context, without reporting any pharmacogenomic effects on PK or PD parameters. |
| PGx | Fairman_2007 | not_relevant | 0 | 0 | The paper reports in vitro CYP1A2 inactivation kinetics of dihydralazine but does not investigate any gene variants or pharmacogenomic effects. |
| popPK | Falch_1981 | irrelevant | 0 | 0 | The study measures renal extraction of [131I]hippuran to assess renal plasma flow, using dihydralazine only as a hemodynamic intervention rather than as the subject of pharmacokinetic analysis. |
| popPK | Frechilla_1993 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of a different drug (DF-100) in isolated tissues, not the pharmacokinetics of dihydralazine. |
| PD | Frechilla_1993 | not_relevant | 0 | 0 | The paper studies DF-100, a derivative of dihydralazine, not dihydralazine itself, and provides no numeric PD parameters for the target drug. |
| popPK | Fuxe_1992 | irrelevant | 0 | 0 | The study is a neuropharmacological investigation of endothelin-1 induced lesions where dihydralazine is used only as a vasodilator comparator, with no pharmacokinetic parameters reported. |
| PD | Fuxe_1992 | not_relevant | 1 | 0 | The paper reports a qualitative prevention of endothelin-1 induced lesions and neurochemical changes by dihydralazine, but provides no numeric dose-response or concentration-effect parameters for dihydralazine itself. |
| popPK | Hof_1984 | irrelevant | 0 | 0 | The study is a hemodynamic/pharmacodynamic comparison in cats and does not report any pharmacokinetic parameters for dihydralazine. |
| PD | Hof_1984 | not_relevant | 1 | 0 | The paper compares the hemodynamic effects of two drugs at fixed doses but does not provide concentration-effect data, dose-response curves, or numeric PD parameters for dihydralazine. |
| PD | Hof_1988 | not_relevant | 0 | 0 | The paper investigates BRL34915 and only mentions dihydralazine qualitatively as a comparator for tissue selectivity, providing no PD parameters or exposure-response data for dihydralazine. |
| popPK | Hof_1989 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of antivasoconstrictor effects in animals, and dihydralazine is used only as a comparator agent with no pharmacokinetic parameters reported. |
| PD | Hof_1989 | not_relevant | 1 | 0 | The paper focuses on isradipine; dihydralazine is only mentioned qualitatively as a control that did not shift dose-response curves, with no numeric PD parameters provided for it. |
| popPK | Huang_2024 | irrelevant | 0 | 0 | The paper focuses on CD38 inhibition and CAR-T cell metabolism, with no mention of dihydralazine or its pharmacokinetic parameters. |
| PD | Huang_2024 | not_relevant | 0 | 0 | The paper focuses on CD38 inhibition in CAR-T cells and does not mention dihydralazine or report any pharmacodynamic parameters for it. |
| popPK | Kramer_1990 | irrelevant | 0 | 0 | The study focuses on the hemodynamic and renal effects of the ACE inhibitor ramipril, with dihydralazine mentioned only as a previously administered vasodilator, and no pharmacokinetic parameters for dihydralazine are reported. |
| popPK | Lawson_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular smooth muscle contraction, not a pharmacokinetic study, and dihydralazine is used only as a comparator agent. |
| PD | Lawson_1989 | not_relevant | 0 | 0 | The paper describes the effect of dihydralazine on K+-induced contractions in rat aorta (mechanistic pharmacology) but does not report a drug exposure-response or dose-response relationship for dihydralazine itself (e.g., EC50, Emax of dihydralazine). |
| PGx | Masubuchi_1998 | not_relevant | 0 | 0 | The study investigates the mechanism of dihydralazine-induced CYP450 inactivation in rat liver microsomes and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Masubuchi_2007 | not_relevant | 0 | 0 | The paper discusses mechanism-based inactivation of P450 enzymes and mentions dihydralazine only in the context of autoantibody formation and hepatitis, without reporting any pharmacogenomic effects on PK or PD parameters. |
| PD | McTavish_1990 | not_relevant | 1 | 0 | The text is a qualitative review of cadralazine that mentions dihydralazine only for comparative efficacy without providing any numeric PD parameters or exposure-response data. |
| PGx | Mizutani_2005 | not_relevant | 0 | 0 | The paper discusses autoantibodies against drug-metabolizing enzymes in autoimmune hepatitis and mentions dihydralazine only as a cause of hepatitis, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Mäntylä_1983 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of timolol, with dihydralazine serving only as a co-administered interaction agent, and no PK parameters for dihydralazine are reported. |
| PGx | Obermayer-Straub_2000 | not_relevant | 0 | 0 | The paper discusses dihydralazine only as an example of a drug causing immune-mediated hepatitis via anti-CYP1A2 autoantibodies, not as a pharmacogenomic study of its PK/PD parameters. |
| popPK | Reimann_1981 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of blood pressure and prostaglandin effects, not a pharmacokinetic study reporting disposition parameters for dihydralazine. |
| popPK | Reimann_1985 | irrelevant | 0 | 0 | The study focuses on acute hemodynamic and endocrine effects (blood pressure, heart rate, catecholamines) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | Reinen_2018 | not_relevant | 0 | 0 | The paper describes in vitro CYP inhibition and GSH adduct formation for dihydralazine but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Robin_2000 | not_relevant | 0 | 0 | The paper investigates the vesicular transport of CYP1A enzymes in rat hepatocytes and the effect of dihydralazine on their plasma membrane expression, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD parameters of dihydralazine. |
| popPK | Serreau_2010 | irrelevant | 0 | 0 | The paper is a general review of drug pharmacology in preeclampsia and does not report any quantitative pharmacokinetic parameters for dihydralazine. |
| PD | Siegmund_1985 | not_relevant | 1 | 0 | The paper discusses qualitative associations between acetylator phenotype and side effects but does not report any numeric concentration-effect or dose-response parameters. |
| popPK | Siegmund_1987_2 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of furosemide (the subject drug) in the presence of dihydralazine (a co-administered agent), and no quantitative PK parameters for dihydralazine itself are reported. |
| popPK | Stríbrnă_1976 | irrelevant | 0 | 0 | The study focuses on circadian sodium and potassium excretion rhythms in hypertension, and dihydralazine is only mentioned as a co-administered antihypertensive agent without any pharmacokinetic parameters reported. |
| popPK | Svensson_1988 | irrelevant | 0 | 0 | The study uses dihydralazine as a vasodilator to induce hyperemia for laser Doppler flowmetry validation, not to measure its pharmacokinetic parameters. |
| popPK | Thirstrup_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular smooth muscle relaxation mechanisms, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Vase_2009 | irrelevant | 0 | 0 | The study focuses on renal physiology and aquaporin-2 excretion rather than pharmacokinetic disposition parameters (CL, V, ka) for dihydralazine. |
| popPK | Wang_2009 | irrelevant | 0 | 0 | The paper is a review of CYP1A2 interactions and mentions dihydralazine only as a mechanism-based inhibitor, without reporting any pharmacokinetic parameters. |
| PGx | Wang_2009 | not_relevant | 0 | 0 | The paper is a review of CYP1A2 and mentions dihydralazine only as a mechanism-based inhibitor of the enzyme, not as a drug whose PK/PD is altered by a genetic variant. |
| popPK | Wejman_1983 | irrelevant | 0 | 0 | The study investigates the effect of dihydralazine on the clearance of a probe drug (I125 hippurate) in rats, rather than reporting the pharmacokinetic parameters of dihydralazine itself. |
| popPK | Wiegers_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tocainide, and dihydralazine is only mentioned as a co-administered medication in one patient, with no PK parameters reported for it. |
| PGx | Zachou_2004 | not_relevant | 0 | 0 | The paper discusses autoantibodies in autoimmune hepatitis and mentions dihydralazine-induced hepatitis only as a context for autoantigen identification, without reporting any pharmacogenomic effects on PK or PD parameters. |
| PGx | Zhou_2004 | not_relevant | 0 | 0 | The paper discusses dihydralazine as a mechanism-based inhibitor of CYP3A4 but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| PD | Zhou_2005 | not_relevant | 1 | 0 | The text is a review of CYP3A4 mechanism-based inhibition that mentions dihydralazine as an example but provides no specific numeric PD parameters or exposure-response data for it. |
| PGx | Zhou_2005 | not_relevant | 0 | 0 | The paper discusses dihydralazine as a mechanism-based inhibitor of CYP3A4, but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 23:05 UTC</sub>
