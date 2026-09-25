<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03F&quot;,&quot;href&quot;:&quot;atc/A03F.md&quot;},{&quot;label&quot;:&quot;alizapride&quot;}]"></div>

# alizapride

- **generic name:** alizapride
- **ATC codes:** `A03FA05`
- **DrugBank:** [DB01425](https://go.drugbank.com/drugs/DB01425)
- **groups:** investigational

## About

**Description.** Alizapride is a dopamine antagonist that is capable of demonstrating both prokinetic and antiemetic effects. This kind of pharmacological activity makes it effective for use in the treatment of various kinds of nausea and vomiting, including that which may occur postoperatively.

**Indication.** Alizapride is used in the treatment of nausea and vomiting, including postoperative nausea and vomiting.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 11:43 | 5:26 | 0/0/0 | 0/0/0 | 0/0/0 | 123,318/5,910 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=alizapride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…renal…”</sub> | prose |

<sub>Actors without a tissue in the table: DRD2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 42 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Canal_1987.pdf` | Canal P et al., Pharmacokinetics of high-dose i.v. aliz…, Fundamental & clinical phar… (1987) | popPK | 9 | [10.1111/j.1472-8206.1987.tb00559.x](https://doi.org/10.1111/j.1472-8206.1987.tb00559.x) | [3428840](https://pubmed.ncbi.nlm.nih.gov/3428840) | The study reports quantitative PK parameters (half-lives) for alizapride, but specific numeric values for clearance and volume of distribution are described qualitatively rather than listed in the provided text. |
| `Rey_2001.pdf` | Rey E et al., Pharmacokinetics of alizapride in child…, Fundamental & clinical phar… (2001) | popPK | 9 | [10.1046/j.1472-8206.2001.00022.x](https://doi.org/10.1046/j.1472-8206.2001.00022.x) | [11468033](https://pubmed.ncbi.nlm.nih.gov/11468033) | The study is a relevant pediatric PK investigation of alizapride, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-09-18T11:42:31.453542+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ballatori_2003 | irrelevant | 0 | 0 | The paper is a review of quality of life in cancer patients and mentions alizapride only as a comparator antiemetic, containing no pharmacokinetic data. |
| popPK | Booij_1988 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for postoperative nausea and vomiting and does not report any pharmacokinetic parameters for alizapride. |
| popPK | Bregni_1991 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing antiemetic drugs, with alizapride serving only as a comparator and no pharmacokinetic parameters reported. |
| popPK | Buna_1996 | irrelevant | 0 | 0 | The paper describes a spectrofluorimetric analytical method for detecting alizapride, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Bursztejn_2008 | irrelevant | 0 | 0 | The paper is a case report on cutaneous adverse drug reactions where alizapride is used only as a therapeutic substitute, with no pharmacokinetic data reported. |
| popPK | Cadranel_1987 | irrelevant | 0 | 0 | The paper is a clinical efficacy and tolerability study focusing on therapeutic outcomes and motility, with no report of quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Cadranel_1987 | not_relevant | 1 | 0 | The text is a qualitative summary of clinical studies mentioning dosage and general effects (LES pressure, symptoms) but provides no numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Chivers_1988 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study and does not report any pharmacokinetic parameters for alizapride. |
| popPK | Chivers_1989 | irrelevant | 0 | 0 | The study is an in-vivo receptor binding assay using alizapride as a probe ligand, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Clavel_1993 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy studies for ondansetron where alizapride is only a comparator drug, and no pharmacokinetic parameters are reported. |
| popPK | Demol_1989 | irrelevant | 0 | 0 | The paper is a review of gastrointestinal motility disorders that mentions alizapride only as a therapeutic agent without reporting any quantitative pharmacokinetic parameters. |
| popPK | Dupuis_2003 | irrelevant | 0 | 0 | The paper is a clinical review of antiemetic strategies in children that mentions alizapride only as a treatment option, without reporting any pharmacokinetic parameters. |
| popPK | Gomez_1999 | irrelevant | 0 | 0 | The study investigates the immunological effects of dopaminergic drugs on macrophage receptors in guinea pigs and does not report pharmacokinetic parameters for alizapride. |
| popPK | Houin_1982 | irrelevant | 0 | 0 | no_text gate: only 70 chars of text extracted (&lt; 400) |
| popPK | Houin_1984 | irrelevant | 2 | 0 | The study reports bioavailability percentages but lacks quantitative disposition parameters (CL, V, ka) or a compartmental model for alizapride. |
| PD | Houin_1984 | not_relevant | 0 | 0 | The paper reports pharmacokinetic bioavailability data (AUC, absorption percentages) but contains no pharmacodynamic or exposure-response analysis. |
| popPK | Hsu_2026 | irrelevant | 0 | 0 | The paper is a review of cannabis and cannabinoids where alizapride is mentioned only as an active comparator in a meta-analysis, with no pharmacokinetic parameters reported. |
| popPK | Hulstaert_1994 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of antiemetic combinations, and alizapride is used only as a comparator agent with no pharmacokinetic parameters reported. |
| popPK | Huys_1985 | irrelevant | 0 | 0 | The study is a clinical trial assessing anti-emetic efficacy and tolerance, reporting no pharmacokinetic parameters for alizapride. |
| PD | Huys_1985 | not_relevant | 0 | 0 | The paper is a clinical efficacy trial comparing two drugs based on subjective endpoints (nausea/vomiting scores) without reporting any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters. |
| popPK | Kassi_1990 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for vomiting in children and does not report any pharmacokinetic parameters for alizapride. |
| PD | Kassi_1990 | not_relevant | 0 | 0 | The paper is a clinical efficacy trial reporting clinical outcomes (resolution of vomiting) at a fixed dose, with no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Kilpatrick_1986 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding thermodynamics study, not a pharmacokinetic study, and contains no disposition parameters for alizapride. |
| popPK | Laville_1982 | irrelevant | 0 | 0 | The paper describes pharmacodynamic effects (anti-emetic, CNS) and toxicity, but contains no pharmacokinetic parameters or quantitative disposition data for alizapride. |
| PD | Laville_1982 | not_relevant | 2 | 0 | The text provides only qualitative descriptions of pharmacodynamic effects and relative potency compared to metoclopramide, without reporting any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Lee_1993 | irrelevant | 0 | 0 | The paper is a review of tropisetron where alizapride is only mentioned as a comparator, and no pharmacokinetic parameters for alizapride are reported. |
| PD | Lee_1993 | not_relevant | 1 | 0 | The text is a qualitative review of tropisetron that mentions alizapride only for comparative efficacy without providing any numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Marfella_1997 | irrelevant | 0 | 0 | The paper is a descriptive analysis of drug consumption and costs, not a pharmacokinetic study, and contains no PK parameters for alizapride. |
| popPK | Metivier_1984 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of digoxin as the subject drug, with alizapride serving only as a co-administered agent to test for interactions, and no quantitative PK parameters for alizapride are reported. |
| popPK | Moreno_1992 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing antiemetic regimens and does not report any pharmacokinetic parameters for alizapride. |
| popPK | Niederle_1986 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing antiemetic effects, not a pharmacokinetic study, and reports no disposition parameters for alizapride. |
| PD | Niederle_1986 | not_relevant | 1 | 0 | The paper reports a clinical efficacy comparison (medians of emesis episodes and nausea duration) between two drugs but does not provide pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., EC50, Emax) for alizapride. |
| popPK | Rey_2001 | relevant | 9 | 0 | The study is a relevant pediatric PK investigation of alizapride, but the specific numeric parameter values are not present in the provided evidence text. |
| PD | Rey_2001 | not_relevant | 0 | 0 | The study reports only pharmacokinetic parameters (clearance, etc.) and dosage recommendations based on age/weight, with no analysis of pharmacodynamic effects or exposure-response relationships. |
| popPK | Robieux_1996 | irrelevant | 0 | 0 | The paper is an analytical method study for etoposide, and alizapride is only mentioned as a co-administered drug to check for interference, with no PK parameters reported for it. |
| PD | Robieux_1996 | not_relevant | 0 | 0 | The paper describes an analytical method for measuring free etoposide and mentions alizapride only as a co-administered drug that did not interfere with the assay; it contains no pharmacodynamic or exposure-response data for alizapride. |
| popPK | Roché_1987 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing antiemetic effects and does not report any quantitative pharmacokinetic parameters for alizapride. |
| PD | Roché_1987 | not_relevant | 1 | 0 | The paper reports only qualitative clinical outcomes (percentages of patients with emesis episodes) and does not provide any concentration-effect data, dose-response curves, or numeric PD parameters. |
| popPK | Saur_1996 | irrelevant | 0 | 0 | The paper is a survey of clinical practices regarding antiemetic use and does not report any pharmacokinetic parameters for alizapride. |
| PD | Saur_1996 | not_relevant | 0 | 0 | The paper is a survey of clinical practices regarding antiemetic use and contains no pharmacokinetic or pharmacodynamic data, concentration-effect analysis, or numeric PD parameters for alizapride. |
| popPK | Szelenyi_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic evaluation of antiemetic efficacy in pigs and does not report any pharmacokinetic parameters for alizapride. |
| popPK | Tamaro_2010 | irrelevant | 0 | 0 | The paper describes an analytical HPLC method for stability testing and does not report any pharmacokinetic parameters for alizapride. |
| PD | Tamaro_2010 | not_relevant | 0 | 0 | The paper describes a stability-indicating HPLC-UV analytical method for alizapride and its degradation products, containing no pharmacodynamic or exposure-response data. |
| popPK | Van_2003 | irrelevant | 0 | 0 | The study is a clinical trial comparing the efficacy of anti-emetics (vomiting incidence) and does not report any pharmacokinetic parameters for alizapride. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetic efficacy and safety for postoperative nausea and vomiting, and does not report any pharmacokinetic parameters for alizapride. |
| PD | Weibel_2020 | not_relevant | 0 | 0 | The paper is a network meta-analysis of clinical trials for PONV prevention and does not contain any pharmacokinetic or pharmacodynamic modeling, nor does it report specific exposure-response or dose-response parameters for alizapride. |
| popPK | Xing_2026 | irrelevant | 0 | 0 | The paper describes a deep-learning platform for drug discovery and does not report any pharmacokinetic parameters for alizapride. |
| PD | Xing_2026 | not_relevant | 0 | 0 | The paper describes a deep-learning platform for drug discovery and does not report any pharmacodynamic or exposure-response data for alizapride. |
| popPK | dAllens_1991 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of ondansetron, with alizapride mentioned only as a comparator drug without any PK parameters reported for it. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | The paper discusses pharmacokinetics of fludarabine and voriconazole in the context of stem cell transplantation, but contains no data or mention of alizapride. |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text consists of abstracts from a hematology conference and contains no mention of alizapride or any pharmacodynamic modeling. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a header for a conference poster session and contains no data, results, or parameters regarding alizapride or any pharmacodynamic relationship. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
