<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;velaglucerase alfa&quot;}]"></div>

# velaglucerase alfa

- **generic name:** velaglucerase alfa
- **ATC codes:** `A16AB10`
- **DrugBank:** [DB06720](https://go.drugbank.com/drugs/DB06720) · **PubChem:** not captured
- **groups:** approved

## About

Velaglucerase alfa is an enzyme replacement medicine used to treat Gaucher's disease. It is approved and authorised in the European Union, where it is used for this rare condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3492447](https://www.wikidata.org/wiki/Q3492447) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 12:10 | 0:56 | 0/0/0 | 0/0/0 | 0/0/0 | 37,421/812 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=velaglucerase_alfa) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GBA1 (other).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 31 matched, 24 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pleat_2016.pdf` | Pleat R et al., Stability is maintained in adults with…, Molecular genetics and meta… (2016) | pgx | 5 | [10.1016/j.ymgmr.2016.08.009](https://doi.org/10.1016/j.ymgmr.2016.08.009) | [27722092](https://www.ncbi.nlm.nih.gov/pubmed/27722092) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-05T12:10:29.631592+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abian_2011 | irrelevant | 0 | 0 | This is an in-vitro stability and binding study with no pharmacokinetic disposition parameters or numeric PK values for velaglucerase alfa. |
| PD | Abian_2011 | not_relevant | 1 | 0 | The paper reports qualitative in vitro activity, stability, and NB-DNJ binding effects for velaglucerase alfa, but no numeric exposure- or dose-response relationship or derivable PD parameters. |
| PGx | Abian_2011 | not_relevant | 0 | 0 | The paper investigates the biophysical stability and interaction of velaglucerase alfa with miglustat in vitro, but does not report pharmacogenomic effects on PK or PD parameters in patients. |
| popPK | Ben_2013 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study comparing hemoglobin levels and adverse events, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Crivaro_2025 | irrelevant | 0 | 0 | This is an in-vitro nanoparticle encapsulation and cellular study with no pharmacokinetic disposition parameters or numeric PK values. |
| PD | Crivaro_2025 | not_relevant | 1 | 0 | The paper reports qualitative cellular activity, internalization, and viability findings for velaglucerase-loaded nanoparticles but provides no dose/concentration-response analysis or numeric PD parameters. |
| PGx | Dasgupta_2013 | not_relevant | 0 | 0 | The paper reports transcriptomic changes in a mouse model treated with the drug, not the effect of a gene variant on the drug's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Elstein_2015 | irrelevant | 0 | 0 | The paper reports safety and efficacy outcomes (clinical parameters, biomarkers) of a switch study, not pharmacokinetic disposition parameters (CL, V, t1/2) for velaglucerase alfa. |
| popPK | Morris_2012 | irrelevant | 2 | 1 | The paper is a clinical review that reports only a mean residence time (14 minutes) without providing quantitative compartmental PK parameters like clearance, volume of distribution, or half-life derived from a PK model. |
| popPK | Najarian_2017 | irrelevant | 0 | 0 | The study focuses on immunogenicity (antibody detection) and bioanalytical method validation, not pharmacokinetic disposition parameters. |
| popPK | Pastores_2010 | irrelevant | 0 | 0 | This is a clinical overview with no quantitative pharmacokinetic parameters or numeric values for velaglucerase alfa. |
| PD | Pastores_2010 | not_relevant | 2 | 0 | This review only qualitatively mentions in vitro uptake and clinical efficacy, with no numeric dose/exposure-response analysis or derivable PD parameters. |
| popPK | Pastores_2016 | irrelevant | 0 | 0 | This is an anti-drug antibody safety analysis and reports no quantitative pharmacokinetic parameters for velaglucerase alfa. |
| PD | Pastores_2016 | not_relevant | 2 | 0 | The paper only qualitatively states that anti-velaglucerase alfa antibodies showed no apparent correlation with pharmacodynamic or clinical responses and reports no numeric exposure-/dose-response parameters or curves. |
| popPK | Pereira_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metformin hydrochloride in rats, not velaglucerase alfa. |
| PD | Pereira_2021 | not_relevant | 0 | 0 | The paper concerns metformin nanoparticles, not velaglucerase alfa, and reports only pharmacokinetic parameters without any numeric pharmacodynamic or exposure-response relationship. |
| PGx | Pleat_2016 | not_relevant | 0 | 0 | The paper reports clinical stability upon switching therapies but does not analyze pharmacogenomic effects on PK/PD parameters. |
| popPK | Séllos-Moura_2011 | irrelevant | 0 | 0 | This study reports anti-drug antibody assay cut points, not quantitative pharmacokinetic disposition parameters for velaglucerase alfa. |
| PD | Séllos-Moura_2011 | not_relevant | 0 | 0 | The paper only develops anti-drug and neutralizing-antibody assays; it reports assay cut points, not a velaglucerase alfa dose/exposure-response relationship or numeric PD parameters. |
| popPK | Thekkedath_2013 | irrelevant | 0 | 0 | This is an in-vitro lysosomal delivery study with no pharmacokinetic disposition parameters or numeric PK values. |
| PD | Thekkedath_2013 | not_relevant | 1 | 0 | Reports a single comparative lysosomal-accumulation effect (up to 68%) for formulations, but no velaglucerase exposure- or dose-response relationship or derivable PD parameters. |
| popPK | Van_2016 | irrelevant | 0 | 0 | The paper is a narrative review of Gaucher disease treatments and does not report original quantitative pharmacokinetic parameters for velaglucerase alfa. |
| PGx | Van_2016 | not_relevant | 0 | 0 | The paper is a general review of Gaucher disease treatments and does not report specific pharmacogenomic effects on the PK or PD of velaglucerase alfa. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | This is an in-vitro cellular uptake bioassay with no quantitative pharmacokinetic disposition parameters for velaglucerase alfa. |
| PD | Wang_2026 | not_relevant | 4 | 1 | The paper describes a sigmoidal in vitro dose-response bioassay for velaglucerase alfa uptake, but the provided text reports no numeric PD parameters or extractable curve data. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | no_text gate: only 148 chars of text extracted (&lt; 400) |
| popPK | Zimran_2007 | irrelevant | 0 | 0 | The study evaluates GA-GCB (Gene-Activated human glucocerebrosidase), which is a different drug from velaglucerase alfa. |
| popPK | Zimran_2011 | irrelevant | 0 | 0 | This is a clinical review with no quantitative pharmacokinetic disposition parameters or numeric values for velaglucerase alfa. |
| PD | Zimran_2011 | not_relevant | 2 | 0 | This review qualitatively describes clinical improvements with velaglucerase alfa but reports no numeric dose- or exposure-response relationship or derivable PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
