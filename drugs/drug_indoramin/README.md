<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02C&quot;,&quot;href&quot;:&quot;atc/C02C.md&quot;},{&quot;label&quot;:&quot;indoramin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Indoramin_Norbury1983_reference&quot;,&quot;label&quot;:&quot;Norbury_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_indoramin/Indoramin_Norbury1983_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# indoramin

- **generic name:** indoramin
- **ATC codes:** `C02CA02`
- **DrugBank:** [DB08950](https://go.drugbank.com/drugs/DB08950) · **PubChem:** [CID 33625](https://pubchem.ncbi.nlm.nih.gov/compound/33625)
- **molar mass:** 347.4534 g/mol (C22H25N3O) — DrugBank
- **groups:** approved, withdrawn

## About

Indoramin is an alpha-1 adrenergic blocker that was used to treat high blood pressure and enlarged prostate. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408963](https://www.wikidata.org/wiki/Q408963) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| indoramin | parent | 347.453 | C22H25N3O | DrugBank | [33625](https://pubchem.ncbi.nlm.nih.gov/compound/33625) | Norbury_1983 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 23:28 | 12:06 | 1/0/0 | 0/0/0 | 0/0/0 | 51,484/8,975 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 1/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span> | [Norbury_1983_reference](drugs/drug_indoramin/Indoramin_Norbury1983_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Norbury HM et al., Pharmacokinetics of intravenous indoram…, European journal of clinica… (1983) | [10.1007/BF00543798](https://doi.org/10.1007/BF00543798) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=indoramin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1D (inhibitor), ADRA2B (inhibitor), ADRA2C (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 44 matched, 43 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Neumann_1986.pdf` | Neumann G et al., Pharmacokinetics of indoramin and its m…, Journal of cardiovascular p… (1986) | popPK | 10 | [10.1097/00005344-198600082-00005](https://doi.org/10.1097/00005344-198600082-00005) | [2423791](https://pubmed.ncbi.nlm.nih.gov/2423791) | The abstract explicitly reports quantitative pharmacokinetic parameters for indoramin, including clearance (11.2 ml/min/kg), volume of distribution (11.2 L/kg), and half-life (9.1-12.2 h). |
| `Norbury_1983.pdf` | Norbury HM et al., Pharmacokinetics of intravenous indoram…, European journal of clinica… (1983) | popPK | 10 | [10.1007/BF00543798](https://doi.org/10.1007/BF00543798) | [6628508](https://pubmed.ncbi.nlm.nih.gov/6628508) | The paper reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for indoramin in humans with specific numeric values provided in the text. |
| `Pierce_1987_2.pdf` | Pierce DM et al., Pharmacokinetics and systemic availabil…, European journal of clinica… (1987) | popPK | 10 | [10.1007/BF02455999](https://doi.org/10.1007/BF02455999) | [3653231](https://pubmed.ncbi.nlm.nih.gov/3653231) | The paper reports quantitative pharmacokinetic parameters (Vd, CL, t1/2, bioavailability) for indoramin in healthy subjects with specific numeric values provided in the text. |
| `Pierce_1987.pdf` | Pierce DM et al., The pharmacokinetics of indoramin and 6…, European journal of clinica… (1987) | popPK | 9 | [10.1007/BF00610381](https://doi.org/10.1007/BF00610381) | [3691597](https://pubmed.ncbi.nlm.nih.gov/3691597) | The study reports quantitative pharmacokinetic parameters (Cmax, AUC, t1/2 beta) for indoramin in human subjects, with specific numeric values provided in the text. |
| `Abrams_1989.pdf` | Abrams SM et al., Pharmacokinetic interaction between ind…, Human toxicology (1989) | popPK | 8 | [10.1177/096032718900800306](https://doi.org/10.1177/096032718900800306) | [2744781](https://pubmed.ncbi.nlm.nih.gov/2744781) | The study reports pharmacokinetic parameters for indoramin, but the evidence only provides percentage changes in Cpmax and AUC rather than absolute quantitative values for clearance, volume, or half-life. |
| `Draffan_1976.pdf` | Draffan GH et al., Pharmacokinetics of indoramin in man, British journal of clinical… (1976) | popPK | 8 | [10.1111/j.1365-2125.1976.tb00626.x](https://doi.org/10.1111/j.1365-2125.1976.tb00626.x) | [788751](https://pubmed.ncbi.nlm.nih.gov/788751) | The paper is a PK study of indoramin in humans, but the evidence text only provides qualitative descriptions (e.g., "same order as liver blood flow") and excretion percentages, lacking specific numeric values for clearance, volume, or half-life. |
| `Norbury_1984.pdf` | Norbury HM et al., Pharmacokinetics of oral indoramin in e…, European journal of clinica… (1984) | popPK | 8 | [10.1007/BF00544054](https://doi.org/10.1007/BF00544054) | [6499905](https://pubmed.ncbi.nlm.nih.gov/6499905) | The study reports quantitative pharmacokinetic parameters (half-life) for indoramin in humans, though other parameters like clearance are only qualitatively described. |
| `Pierce_1988_2.pdf` | Pierce DM et al., Intra- and inter-subject variation in t…, European journal of clinica… (1988) | popPK | 8 | [10.1007/BF00609252](https://doi.org/10.1007/BF00609252) | [3191938](https://pubmed.ncbi.nlm.nih.gov/3191938) | The study reports pharmacokinetic variability (CVs) for indoramin but lacks specific quantitative disposition parameters like clearance, volume, or half-life in the provided text. |
| `Schabort_1990.pdf` | Schabort I et al., The pharmacokinetics of oral indoramin…, British journal of clinical… (1990) | popPK | 8 | [10.1111/j.1365-2125.1990.tb03656.x](https://doi.org/10.1111/j.1365-2125.1990.tb03656.x) | [2328193](https://pubmed.ncbi.nlm.nih.gov/2328193) | The study reports pharmacokinetic parameters for indoramin, but the evidence text only provides qualitative comparisons and references to median values without listing the specific numeric values for clearance, volume, or half-life. |
| `Volans_1982.pdf` | Volans GN et al., Pharmacokinetics of oral indoramin, Current medical research an… (1982) | popPK | 8 | [10.1185/03007998209109757](https://doi.org/10.1185/03007998209109757) | [7105823](https://pubmed.ncbi.nlm.nih.gov/7105823) | The study reports PK parameters for indoramin, but only qualitative ranges (Tmax 1-4h) and a single half-life value (5h) are provided, lacking specific clearance, volume, or rate constants. |
| `McPherson_1982.pdf` | McPherson GA et al., A study of alpha 1-adrenoceptors in rat…, British journal of pharmaco… (1982) | pd | 4 | [10.1111/j.1476-5381.1982.tb09284.x](https://doi.org/10.1111/j.1476-5381.1982.tb09284.x) | [6127133](https://www.ncbi.nlm.nih.gov/pubmed/6127133) | metadata signals extractable PD data (EC50) |
| `Minneman_1983.pdf` | Minneman KP et al., Occupancy of alpha 1-adrenergic recepto…, Molecular pharmacology (1983) | pd | 4 | not captured | [6300645](https://www.ncbi.nlm.nih.gov/pubmed/6300645) | metadata signals extractable PD data (EC50) |
| `Nedergaard_1986.pdf` | Nedergaard OA, Pre- and postsynaptic effects of indora…, Journal of cardiovascular p… (1986) | pd | 4 | [10.1097/00005344-198609000-00021](https://doi.org/10.1097/00005344-198609000-00021) | [2429075](https://www.ncbi.nlm.nih.gov/pubmed/2429075) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-27T23:24:21.818054+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abrams_1989 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for indoramin, but the evidence only provides percentage changes in Cpmax and AUC rather than absolute quantitative values for clearance, volume, or half-life. |
| popPK | Archibald_1986 | irrelevant | 2 | 0 | The paper is a review that summarizes findings without providing original quantitative PK parameters (CL, V, Q, ka) for indoramin, mentioning only a qualitative half-life estimate. |
| popPK | Bauer_1984 | irrelevant | 0 | 0 | The study focuses on renal function and body fluid composition, not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Bauer_1985 | irrelevant | 0 | 0 | The paper is a review of renal effects of adrenergic blocking agents and does not report any pharmacokinetic parameters for indoramin. |
| popPK | Bill_1989 | irrelevant | 0 | 0 | The study is a pharmacological investigation of thermogenic effects in mice where indoramin is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| PD | Bill_1989 | not_relevant | 1 | 0 | The paper reports dose-response relationships for alpha-2 agonists (clonidine, UK-14,304, B-HT 933), but indoramin is only mentioned as a partial antagonist with variable, non-dose-related effects and no numeric PD parameters are provided for it. |
| popPK | Boe_1980 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of adrenergic receptors in isolated pulmonary arteries, not a pharmacokinetic study, and indoramine is used only as a receptor blocking agent. |
| popPK | Deering_1988 | irrelevant | 0 | 0 | The study focuses on baroreflex sensitivity and hemodynamic effects, not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Draffan_1976 | relevant | 8 | 2 | The paper is a PK study of indoramin in humans, but the evidence text only provides qualitative descriptions (e.g., "same order as liver blood flow") and excretion percentages, lacking specific numeric values for clearance, volume, or half-life. |
| PD | Good_1988 | not_relevant | 2 | 0 | The text describes qualitative hemodynamic effects of indoramin compared to other agents but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (e.g., Emax, EC50). |
| PD | Holmes_1986 | not_relevant | 2 | 0 | The text is a qualitative review of therapeutic efficacy and side effects, lacking any numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50). |
| popPK | McAdams_1986 | irrelevant | 0 | 0 | no_text gate: only 396 chars of text extracted (&lt; 400) |
| PD | McAdams_1986 | not_relevant | 0 | 0 | The text is a correction notice regarding a grammatical error in a sentence about pA2 values and does not contain any numeric PD parameters or exposure-response data. |
| popPK | McPherson_1982 | irrelevant | 0 | 0 | no_text gate: only 177 chars of text extracted (&lt; 400) |
| PD | McPherson_1982 | not_relevant | 0 | 0 | The paper focuses on alpha-1 adrenoceptor binding and gluconeogenesis in rat renal cortex and does not mention indoramin or report any pharmacodynamic parameters for it. |
| popPK | Minneman_1983 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| popPK | Morrison_1986 | irrelevant | 0 | 0 | The study focuses on renal function and hemodynamics rather than pharmacokinetic disposition parameters (CL, V, t1/2) for indoramin. |
| popPK | Nicholls_1983 | irrelevant | 0 | 0 | The study reports hemodynamic effects (blood pressure and heart rate) rather than pharmacokinetic disposition parameters (CL, V, t1/2, etc.). |
| popPK | Paciorek_1984 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of adrenoceptor selectivity where indoramin is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Paciorek_1984 | not_relevant | 2 | 1 | The paper describes qualitative dose-response shifts and selectivity comparisons for indoramin but does not provide numeric PD parameters (e.g., pA2, Ki, Emax, EC50) or extractable concentration-effect curves. |
| popPK | Pierce_1988 | irrelevant | 2 | 0 | The paper describes a pharmacokinetic study of indoramin but the provided evidence contains only qualitative descriptions of accumulation and relative metabolite levels, lacking specific quantitative disposition parameters (CL, V, t1/2, ka). |
| popPK | Pierce_1988_2 | relevant | 8 | 2 | The study reports pharmacokinetic variability (CVs) for indoramin but lacks specific quantitative disposition parameters like clearance, volume, or half-life in the provided text. |
| popPK | Pierce_1990 | irrelevant | 2 | 8 | The paper is explicitly identified as a review of clinical pharmacokinetics, which falls under the exclusion criteria for low relevance despite containing quantitative parameter values. |
| PD | Pierce_1990 | not_relevant | 1 | 0 | The paper is a review of pharmacokinetics and metabolism; it qualitatively mentions that pharmacodynamics are related to the drug and metabolite but provides no numeric PD parameters or exposure-response data. |
| PD | Punyauppa-Path_2026 | not_relevant | 0 | 0 | The paper is a food science study on yogurt formulation; indoramin is only mentioned as a metabolite in molecular docking simulations, with no pharmacodynamic or exposure-response data. |
| popPK | Schabort_1990 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for indoramin, but the evidence text only provides qualitative comparisons and references to median values without listing the specific numeric values for clearance, volume, or half-life. |
| popPK | Silke_1986 | irrelevant | 1 | 0 | The study reports haemodynamic dose-response effects and qualitative plasma concentration ranges, but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Studer_1993 | irrelevant | 0 | 0 | The paper is a review of antihypertensive therapy that mentions indoramin only as a hybrid drug without providing any quantitative pharmacokinetic parameters. |
| popPK | Volans_1982 | relevant | 8 | 2 | The study reports PK parameters for indoramin, but only qualitative ranges (Tmax 1-4h) and a single half-life value (5h) are provided, lacking specific clearance, volume, or rate constants. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 23:24 UTC</sub>
