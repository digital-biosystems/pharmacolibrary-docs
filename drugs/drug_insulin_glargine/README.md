<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin glargine&quot;}]"></div>

# insulin glargine

- **generic name:** insulin glargine
- **ATC codes:** `A10AE04`, `A10AE54`
- **DrugBank:** [DB00047](https://go.drugbank.com/drugs/DB00047) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Insulin glargine is a long-acting insulin used to treat diabetes, including type-1 diabetes and high blood sugar. It is widely used and authorised in the European Union for diabetes mellitus.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417317](https://www.wikidata.org/wiki/Q417317) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| insulin glargine (insulin_glargine) | parent | 6062.95 | C267H404N72O78S6 | PubChem | [118984454](https://pubchem.ncbi.nlm.nih.gov/compound/118984454) | Tham_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 22:11 | 10:41 | 0/2/0 | 1/0/0 | 0/0/0 | 235,623/22,573 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/5 | 5/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Schiavon_2020_reference](drugs/drug_insulin_glargine/InsulinGlargine_Schiavon2020_reference.md) | — | 1-compartment (no model) | 0 | Schiavon M et al., Modeling Subcutaneous Absorption of Lon…, IEEE transactions on bio-me… (2020) | [10.1109/TBME.2019.2919250](https://doi.org/10.1109/TBME.2019.2919250) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.438). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Tham_2017_reference](drugs/drug_insulin_glargine/InsulinGlargine_Tham2017_reference.md) | — | 1-compartment (no model) | 6 (+2 cov.) | Tham LS et al., Modeling Pharmacokinetic Profiles of In…, Journal of clinical pharmac… (2017) | [10.1002/jcph.899](https://doi.org/10.1002/jcph.899) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sommerfeld_2010_IGF1R](drugs/drug_insulin_glargine/pd_Sommerfeld_2010_IGF1R.md) | IGF1R affinity ← insulin_glargine · direct sigmoid Emax (Hill) effect | — | Sommerfeld MR et al., In vitro metabolic and mitogenic signal…, PloS one (2010) | [10.1371/journal.pone.0009540](https://doi.org/10.1371/journal.pone.0009540) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sommerfeld_2010_IGF1R_auto_phosphorylation](drugs/drug_insulin_glargine/pd_Sommerfeld_2010_IGF1R_auto_phosphorylation.md) | IGF1R auto-phosphorylation ← insulin_glargine · direct sigmoid Emax (Hill) effect | — | Sommerfeld MR et al., In vitro metabolic and mitogenic signal…, PloS one (2010) | [10.1371/journal.pone.0009540](https://doi.org/10.1371/journal.pone.0009540) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sommerfeld_2010_IR_A](drugs/drug_insulin_glargine/pd_Sommerfeld_2010_IR_A.md) | IR-A affinity ← insulin_glargine · direct sigmoid Emax (Hill) effect | — | Sommerfeld MR et al., In vitro metabolic and mitogenic signal…, PloS one (2010) | [10.1371/journal.pone.0009540](https://doi.org/10.1371/journal.pone.0009540) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sommerfeld_2010_IR_A_auto_phosphorylation](drugs/drug_insulin_glargine/pd_Sommerfeld_2010_IR_A_auto_phosphorylation.md) | IR-A auto-phosphorylation ← insulin_glargine · direct sigmoid Emax (Hill) effect | — | Sommerfeld MR et al., In vitro metabolic and mitogenic signal…, PloS one (2010) | [10.1371/journal.pone.0009540](https://doi.org/10.1371/journal.pone.0009540) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sommerfeld_2010_IR_B](drugs/drug_insulin_glargine/pd_Sommerfeld_2010_IR_B.md) | IR-B affinity ← insulin_glargine · direct sigmoid Emax (Hill) effect | — | Sommerfeld MR et al., In vitro metabolic and mitogenic signal…, PloS one (2010) | [10.1371/journal.pone.0009540](https://doi.org/10.1371/journal.pone.0009540) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sommerfeld_2010_IR_B_auto_phosphorylation](drugs/drug_insulin_glargine/pd_Sommerfeld_2010_IR_B_auto_phosphorylation.md) | IR-B auto-phosphorylation ← insulin_glargine · direct sigmoid Emax (Hill) effect | — | Sommerfeld MR et al., In vitro metabolic and mitogenic signal…, PloS one (2010) | [10.1371/journal.pone.0009540](https://doi.org/10.1371/journal.pone.0009540) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sommerfeld_2010_Metabolic_potency](drugs/drug_insulin_glargine/pd_Sommerfeld_2010_Metabolic_potency.md) | Metabolic potency ← insulin_glargine · direct sigmoid Emax (Hill) effect | — | Sommerfeld MR et al., In vitro metabolic and mitogenic signal…, PloS one (2010) | [10.1371/journal.pone.0009540](https://doi.org/10.1371/journal.pone.0009540) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sommerfeld_2010_Mitogenic_potency](drugs/drug_insulin_glargine/pd_Sommerfeld_2010_Mitogenic_potency.md) | Mitogenic potency ← insulin_glargine · direct sigmoid Emax (Hill) effect | — | Sommerfeld MR et al., In vitro metabolic and mitogenic signal…, PloS one (2010) | [10.1371/journal.pone.0009540](https://doi.org/10.1371/journal.pone.0009540) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=insulin_glargine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: IGF1R (activator), INS (modulator), INSR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 18 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Faggionato_2021.pdf` | Faggionato E et al., Modeling Between-Subject Variability in…, Annual International Confer… (2021) | popPK | 10 | [10.1109/EMBC46164.2021.9629554](https://doi.org/10.1109/EMBC46164.2021.9629554) | [34892156](https://pubmed.ncbi.nlm.nih.gov/34892156) | The paper describes a population PK model for insulin glargine, but the specific numeric parameter values are not present in the provided evidence. |
| `Schiavon_2020.pdf` | Schiavon M et al., Modeling Subcutaneous Absorption of Lon…, IEEE transactions on bio-me… (2020) | popPK | 9 | [10.1109/TBME.2019.2919250](https://doi.org/10.1109/TBME.2019.2919250) | [31150327](https://pubmed.ncbi.nlm.nih.gov/31150327) | The paper reports a compartmental model for insulin glargine absorption with specific numeric parameter values (k, dissolution rate, absorption rate) provided in the abstract, though some formulas are represented as placeholders. |
| `Chang_2025.pdf` | Chang YC et al., Comparing the Efficacy of Various Insul…, Journal of clinical pharmac… (2025) | pd | 5 | [10.1002/jcph.70010](https://doi.org/10.1002/jcph.70010) | [39982761](https://www.ncbi.nlm.nih.gov/pubmed/39982761) | metadata signals extractable PD data (PharmacodynamicModel) |

<sub>queue written 2026-10-04T22:02:09.096070+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Araki_2015 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing dulaglutide and insulin glargine, reporting HbA1c and safety outcomes rather than pharmacokinetic parameters. |
| popPK | Chang_2025 | irrelevant | 0 | 0 | no_text gate: only 140 chars of text extracted (&lt; 400) |
| popPK | Faggionato_2021 | relevant | 10 | 0 | The paper describes a population PK model for insulin glargine, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Fawcett_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cellular hormone metabolism and metabolic effects in cell lines, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Gupta_2018 | irrelevant | 0 | 0 | The paper is a retrospective observational study of clinical outcomes (HbA1c, hypoglycemia) and dosing patterns, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PGx | Heise_2023 | not_relevant | 0 | 0 | The paper reports PK/PD properties of a novel insulin fusion protein (insulin efsitora alfa) and compares it to insulin glargine, but it does not report any pharmacogenomic effects (gene variants) on insulin glargine. |
| PGx | Kohn_2007 | not_relevant | 0 | 0 | The paper describes the structural modification and in vivo testing of new insulin analogs, not the effect of human genetic variants on the PK/PD of insulin glargine. |
| PGx | Pillai_2018 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on safety markers (liver enzymes, fat) for Basal Insulin Peglispro, not for insulin glargine. |
| popPK | Rendell_2013 | irrelevant | 0 | 0 | The paper is a review of insulin degludec, and insulin glargine is only mentioned as a comparator without specific quantitative PK parameters provided. |
| PD | Rendell_2013 | not_relevant | 1 | 0 | The text is a qualitative review comparing insulin degludec and glargine, mentioning PK parameters (tmax, t1/2) but providing no numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Rhoads_2011 | irrelevant | 0 | 0 | The study is a retrospective cohort analysis of clinical outcomes (HbA1c, costs) and does not report pharmacokinetic parameters. |
| popPK | Sommerfeld_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of receptor binding and signaling, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Sun_2021 | irrelevant | 0 | 0 | The study focuses on immunogenicity (antibody response) and safety/efficacy, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Tuttle_2023 | irrelevant | 0 | 0 | The study is a clinical trial comparing kidney fibrosis biomarkers where insulin glargine is used only as a comparator, with no pharmacokinetic parameters reported. |
| popPK | Utzschneider_2025 | irrelevant | 0 | 0 | The study focuses on beta-cell function parameters (ISR, sensitivity) derived from OGTT modeling, not the pharmacokinetic disposition parameters (CL, V, ka) of insulin glargine. |
| popPK | Warnken_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of proliferative effects and receptor binding, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 22:02 UTC</sub>
