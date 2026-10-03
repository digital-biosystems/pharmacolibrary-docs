<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;eprosartan&quot;}]"></div>

# eprosartan

- **generic name:** eprosartan
- **ATC codes:** `C09CA02`, `C09DA02`
- **DrugBank:** [DB00876](https://go.drugbank.com/drugs/DB00876) · **PubChem:** [CID 5281037](https://pubchem.ncbi.nlm.nih.gov/compound/5281037)
- **molar mass:** 424.513 g/mol (C23H24N2O4S) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Eprosartan is an angiotensin II receptor antagonist used to treat hypertension. It performs 2 actions on the renin angiotensin system. By preventing the binding of angiotensin II to AT1, vascular smooth muscle relaxes and vasodilation occurs. By inhibiting norepinephrine production, blood pressure is further reduced.

**Indication.** For the management of hypertension alone or in combination with other classes of antihypertensive agents. Also used as a first-line agent in the treatment of diabetic nephropathy, as well as a second-line agent in the treatment of congestive heart failure (only in those intolerant of ACE inhibitors).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 16:54 | 9:08 | 0/0/0 | 0/0/0 | 0/0/0 | 57,030/16,083 | openai / gpt-6-luna | 0 | 1/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=eprosartan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Administering eprosartan with food delays absorption…”</sub> | prose |
| metabolism | kidney | <sub>“…Less than 2% of an oral dose is excreted in the urine as a glucuronide…”</sub> | prose |
| excretion | kidney | `ABCC2` inducer | DrugBank actor |
| excretion | liver | `ABCC2` inducer | DrugBank actor |
| excretion | small intestine | `ABCC2` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: AGTR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 46 matched, 43 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `van_2013.pdf` | van Rijn-Bikker PC et al., Pharmacokinetic-pharmacodynamic modelin…, Clinical pharmacokinetics (2013) | popPK | 10 | [10.1007/s40262-013-0073-6](https://doi.org/10.1007/s40262-013-0073-6) | [23696281](https://pubmed.ncbi.nlm.nih.gov/23696281) | Eprosartan is the subject of a population PK-PD model, but no numeric disposition parameters are provided in the evidence. |
| `Nap_2004.pdf` | Nap A et al., Different prejunctional and postjunctio…, Journal of cardiovascular p… (2004) | pd | 4 | [10.1097/00005344-200403000-00015](https://doi.org/10.1097/00005344-200403000-00015) | [15076228](https://www.ncbi.nlm.nih.gov/pubmed/15076228) | metadata signals extractable PD data (Emax) |
| `Taavitsainen_2000.pdf` | Taavitsainen P et al., In vitro inhibition screening of human…, European journal of clinica… (2000) | pd | 4 | [10.1007/s002280050731](https://doi.org/10.1007/s002280050731) | [10877007](https://www.ncbi.nlm.nih.gov/pubmed/10877007) | metadata signals extractable PD data (IC50) |
| `Weiss_2010.pdf` | Weiss J et al., Interaction of angiotensin receptor typ…, Biopharmaceutics & drug dis… (2010) | pgx | 7 | [10.1002/bdd.699](https://doi.org/10.1002/bdd.699) | [20222053](https://www.ncbi.nlm.nih.gov/pubmed/20222053) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Yang_2016.pdf` | Yang R et al., Drug Interactions with Angiotensin Rece…, Current drug metabolism (2016) | pgx | 7 | [10.2174/1389200217666160524143843](https://doi.org/10.2174/1389200217666160524143843) | [27216792](https://www.ncbi.nlm.nih.gov/pubmed/27216792) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-09-30T16:52:49.458462+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahad_2017 | irrelevant | 1 | 0 | The study reports transdermal permeation metrics, not eprosartan disposition parameters; no relevant parameter values are provided. |
| PD | Ahad_2017 | not_relevant | 2 | 0 | Reports antihypertensive effects qualitatively, but no numeric dose- or exposure-response relationship or derivable PD parameters. |
| popPK | Alnajjar_2020 | irrelevant | 0 | 0 | Eprosartan is only screened as a comparator, and no pharmacokinetic parameters are reported. |
| PD | Alnajjar_2020 | not_relevant | 1 | 0 | Eprosartan is only qualitatively ranked by docking affinity; no numeric eprosartan PD parameter or exposure-/dose-response relationship is reported. |
| popPK | Balt_2001 | irrelevant | 0 | 0 | This is a rat pharmacodynamic study and reports no eprosartan disposition parameters. |
| popPK | Balt_2002 | irrelevant | 0 | 0 | Eprosartan is compared for pharmacodynamic effects, with no quantitative pharmacokinetic disposition parameters reported. |
| PD | Balt_2002 | not_relevant | 3 | 0 | The paper describes dose-dependent sympathoinhibition and ranks eprosartan, but reports no numeric eprosartan doses, effect values, or derivable PD parameters. |
| popPK | Benson_2008 | irrelevant | 0 | 0 | Eprosartan is only an in-vitro comparator, and no pharmacokinetic parameters are reported. |
| PD | Benson_2008 | not_relevant | 2 | 0 | Eprosartan is reported to have little or no antiproliferative effect up to 10 µmol/L, but no numeric concentration-effect data or PD parameters are provided. |
| popPK | Blum_1999 | irrelevant | 1 | 0 | This is a review without quantitative disposition parameters; no numeric values or supplementary material are provided. |
| PD | Blum_1999 | not_relevant | 1 | 0 | The review only qualitatively states that eprosartan did not affect warfarin or glyburide pharmacodynamics; it reports no eprosartan exposure- or dose-response relationship or numeric PD parameters. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | This narrative review provides no eprosartan disposition parameters or numeric PK values. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The review text does not mention eprosartan or report an eprosartan exposure- or dose-response relationship. |
| popPK | Derosa_2004 | irrelevant | 1 | 10 | This is an antihypertensive trial, not a PK study; cited eprosartan half-life and volume values are readable in the text. |
| PD | Derosa_2004 | not_relevant | 2 | 0 | Fixed-dose clinical outcomes are reported, but no eprosartan exposure- or dose-response analysis or numeric PD parameters are stated or derivable; PK/PD is mentioned only speculatively. |
| popPK | Edwards_1996 | irrelevant | 0 | 0 | Eprosartan is tested only in an in-vitro urate-transport assay, with no pharmacokinetic disposition parameters reported. |
| popPK | Guimarães_2004 | irrelevant | 0 | 0 | This is an in-vitro receptor study and reports no eprosartan pharmacokinetic parameters or values. |
| PD | Guimarães_2004 | not_relevant | 2 | 0 | Eprosartan is mentioned qualitatively, but no numeric eprosartan concentration- or dose-response parameters or effect-versus-concentration data are reported or derivable. |
| popPK | Hollenberg_2001 | irrelevant | 0 | 0 | This is a review and reports no quantitative eprosartan disposition parameters. |
| PD | Hollenberg_2001 | not_relevant | 2 | 0 | Review qualitatively mentions a dose-response difference for renal blood supply but provides no numeric PD parameters or extractable effect-versus-dose data. |
| popPK | Hu_2012 | irrelevant | 0 | 0 | Eprosartan is screened as an interaction inhibitor, with no pharmacokinetic parameters or values reported. |
| PD | Hu_2012 | not_relevant | 2 | 0 | Eprosartan is identified as an inhibitor, but the reported IC50 range is pooled across eight drugs and no eprosartan-specific value or effect-versus-concentration curve is provided. |
| popPK | Ilson_1998 | irrelevant | 1 | 0 | This is a pharmacodynamic study with no quantitative eprosartan disposition parameters reported. |
| popPK | Kaliuzhina_2007 | irrelevant | 0 | 0 | This is an efficacy study and reports no eprosartan pharmacokinetic parameters or values. |
| PD | Kaliuzhina_2007 | not_relevant | 2 | 0 | Reports qualitative organ-protective effects at a fixed eprosartan dose, but no exposure- or dose-response analysis or derivable numeric PD parameters. |
| popPK | Kazierad_1998 | irrelevant | 0 | 0 | This is a warfarin pharmacodynamic interaction study and reports no eprosartan disposition parameters. |
| PD | Kazierad_1998 | not_relevant | 2 | 0 | Reports only a qualitative no-effect comparison at one eprosartan dose, with no extractable exposure- or dose-response relationship or numeric PD parameters. |
| popPK | Martin_1997 | irrelevant | 0 | 0 | This is a pharmacodynamic interaction study and reports no eprosartan disposition parameters or numeric PK values. |
| PD | Martin_1997 | not_relevant | 0 | 0 | The study reports a fixed-dose treatment comparison for glucose, not an eprosartan exposure- or dose-response relationship or numeric PD parameters. |
| popPK | Nap_2003 | irrelevant | 0 | 0 | This is a receptor-potency study, not a PK study, and reports no eprosartan disposition parameters. |
| popPK | Nap_2003_2 | irrelevant | 0 | 0 | This is an ex vivo pharmacology study reporting eprosartan potency, not pharmacokinetic disposition parameters. |
| popPK | Nap_2004 | irrelevant | 0 | 0 | This is a pharmacodynamic tissue study and reports no eprosartan pharmacokinetic parameters. |
| popPK | Porta_2005 | irrelevant | 0 | 0 | This is a therapeutic-interchange study and reports no quantitative eprosartan disposition parameters. |
| PD | Porta_2005 | not_relevant | 1 | 0 | Eprosartan is mentioned only as part of a therapeutic-interchange discussion; no dose- or exposure-response analysis or numeric PD parameters are reported. |
| popPK | Ramkanth_2021 | irrelevant | 1 | 0 | Eprosartan is studied in a delivery formulation, but no quantitative pharmacokinetic disposition parameters are reported. |
| PD | Ramkanth_2021 | not_relevant | 2 | 0 | The text mentions antihypertensive pharmacodynamic studies comparing formulations, but reports no eprosartan exposure- or dose-response analysis or numeric PD parameters. |
| popPK | Schmidt_2004 | irrelevant | 0 | 0 | This is a review and provides no numeric eprosartan disposition parameters. |
| PD | Schmidt_2004 | not_relevant | 2 | 0 | This is a qualitative review; it mentions pharmacodynamic data for ARBs generally but reports no extractable eprosartan exposure- or dose-response relationship or numeric PD parameters. |
| popPK | Shekhawat_2019 | irrelevant | 2 | 2 | Eprosartan exposure values are reported, but no quantitative disposition parameters or model values are provided in the evidence. |
| PD | Shekhawat_2019 | not_relevant | 2 | 0 | The text qualitatively reports antihypertensive effects, but gives no numeric blood-pressure effects or extractable dose/exposure-response parameters. |
| popPK | Shetty_2000 | irrelevant | 0 | 0 | The study reports pharmacodynamic IC₅₀ values, not eprosartan pharmacokinetic disposition parameters. |
| popPK | Sica_1999 | irrelevant | 1 | 0 | This is a pharmacodynamic review and provides no quantitative eprosartan disposition parameters. |
| PD | Sica_1999 | not_relevant | 2 | 0 | The text qualitatively summarizes eprosartan’s pharmacodynamic effects and safety across doses but provides no numeric exposure- or dose-response relationship or derivable PD parameters. |
| popPK | Stokes_2003 | irrelevant | 0 | 0 | Eprosartan is a pharmacodynamic comparator, and no eprosartan disposition parameters are reported. |
| PD | Stokes_2003 | not_relevant | 2 | 0 | Eprosartan was tested at a single dose, but no numeric eprosartan effect or exposure-/dose-response relationship is reported. |
| popPK | Taavitsainen_2000 | irrelevant | 0 | 0 | This is an in-vitro enzyme inhibition study and reports no eprosartan disposition parameters. |
| PD | Taavitsainen_2000 | not_relevant | 0 | 0 | The reported Ki for eprosartan concerns in vitro CYP inhibition and drug-metabolism interactions, not a pharmacodynamic or therapeutic exposure-response relationship. |
| PGx | Taavitsainen_2000 | not_relevant | 0 | 0 | The paper tests CYP inhibition in vitro and reports no gene variant/genotype/phenotype effect on an eprosartan PK or PD parameter. |
| popPK | Unger_2003 | irrelevant | 0 | 0 | This review only discusses eprosartan’s interaction potential and reports no quantitative disposition parameters. |
| PD | Unger_2003 | not_relevant | 2 | 0 | This is a qualitative review of drug interactions and does not report an eprosartan exposure- or dose-response analysis or extractable numeric PD parameters. |
| popPK | Weiss_2010 | irrelevant | 1 | 0 | Eprosartan is tested only for in-vitro transporter effects, with no quantitative disposition parameters reported. |
| PD | Weiss_2010 | not_relevant | 1 | 0 | Eprosartan is qualitatively reported to induce MRP2 mRNA, but no eprosartan dose/concentration-effect relationship or numeric PD parameters are reported. |
| PGx | Weiss_2010 | not_relevant | 0 | 0 | Reports in-vitro induction of MRP2 by eprosartan, not a gene variant/genotype/phenotype effect on its PK or PD. |
| popPK | White_1996 | irrelevant | 0 | 0 | The study reports blood-pressure effects only, with no eprosartan pharmacokinetic parameters or values. |
| PGx | Yang_2016 | not_relevant | 0 | 0 | The review discusses CYP-mediated drug interactions but reports no gene variant, genotype, or phenotype effect on eprosartan PK or PD. |
| popPK | van_2013 | relevant | 10 | 0 | Eprosartan is the subject of a population PK-PD model, but no numeric disposition parameters are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
