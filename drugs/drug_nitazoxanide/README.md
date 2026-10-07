<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01R&quot;,&quot;href&quot;:&quot;atc/J01R.md&quot;},{&quot;label&quot;:&quot;nitazoxanide&quot;}]"></div>

# nitazoxanide

- **generic name:** nitazoxanide
- **ATC codes:** `J01RA17`, `P01AX11`
- **DrugBank:** [DB00507](https://go.drugbank.com/drugs/DB00507) · **PubChem:** [CID 41684](https://pubchem.ncbi.nlm.nih.gov/compound/41684)
- **molar mass:** 307.282 g/mol (C12H9N3O5S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Nitazoxanide is an antiparasitic drug used to treat the intestinal infections giardiasis and cryptosporidiosis. It is an approved medicine, also has veterinary approval, and is being studied for further uses; it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2943789](https://www.wikidata.org/wiki/Q2943789) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:41 | 1:24 | 0/0/0 | 2/0/0 | 0/0/0 | 154,570/2,364 | einfracz / qwen3.8-27b | 11 | 0/11 | 11/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Driouich_2022_viral_RNA_yield](drugs/drug_nitazoxanide/pd_Driouich_2022_viral_RNA_yield.md) | viral RNA yield ← nitazoxanide · inhibition effect | — | Driouich JS et al., Pre-clinical evaluation of antiviral ac…, EBioMedicine (2022) | [10.1016/j.ebiom.2022.104148](https://doi.org/10.1016/j.ebiom.2022.104148) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hickson_2018_VACV](drugs/drug_nitazoxanide/pd_Hickson_2018_VACV.md) | VACV production ← nitazoxanide · inhibition effect | — | Hickson SE et al., Inhibition of vaccinia virus replicatio…, Virology (2018) | [10.1016/j.virol.2018.03.023](https://doi.org/10.1016/j.virol.2018.03.023) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nitazoxanide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 59 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhao_2010.pdf` | Zhao Z et al., The pharmacokinetics of nitazoxanide ac…, Journal of veterinary pharm… (2010) | popPK | 10 | [10.1111/j.1365-2885.2009.01119.x](https://doi.org/10.1111/j.1365-2885.2009.01119.x) | [20444039](https://pubmed.ncbi.nlm.nih.gov/20444039) | The paper reports quantitative PK parameters (half-lives, Cmax, Tmax, AUC, V/F, Cl) for tizoxanide, the active metabolite of nitazoxanide, in goats. |
| `Gupta_2017.pdf` | Gupta A et al., Pharmacokinetics, Metabolism, and Parti…, Molecular pharmaceutics (2017) | popPK | 8 | [10.1021/acs.molpharmaceut.6b01089](https://doi.org/10.1021/acs.molpharmaceut.6b01089) | [28263078](https://pubmed.ncbi.nlm.nih.gov/28263078) | The study is a PK investigation in mice, but specific quantitative parameters (CL, V, ka) are absent from the provided text, which only lists qualitative changes in half-life. |

<sub>queue written 2026-10-07T11:41:32.460382+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dutt_2026 | irrelevant | 0 | 0 | The paper describes a neuroimaging study predicting dementia progression in frontotemporal lobar degeneration and contains no pharmacokinetic data for nitazoxanide. |
| popPK | Fouks_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study on the effects of air pollution (PM2.5) on sperm DNA fragmentation and contains no pharmacokinetic data for nitazoxanide. |
| popPK | Fumian_2018 | irrelevant | 0 | 0 | The study is an in vitro antiviral screening of Feline Calicivirus (FCV) where nitazoxanide is tested as a therapeutic agent, not for pharmacokinetic parameter estimation. |
| popPK | Gupta_2017 | relevant | 8 | 2 | The study is a PK investigation in mice, but specific quantitative parameters (CL, V, ka) are absent from the provided text, which only lists qualitative changes in half-life. |
| popPK | Hattori_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study where nitazoxanide is only used as a comparator agent to demonstrate antiviral activity; no pharmacokinetic parameters are reported. |
| popPK | Hickson_2018 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study investigating the inhibition of viral replication, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Humaidan_2026 | irrelevant | 0 | 0 | The paper is a study on sperm DNA fragmentation and IVF outcomes, containing no pharmacokinetic data or parameters for nitazoxanide. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The study is a microbiome analysis of the reproductive tract in women with PCOS and does not involve the drug nitazoxanide or any pharmacokinetic parameters. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper is a longitudinal study of Alzheimer's disease biomarkers and cognitive trajectories, containing no pharmacokinetic data for nitazoxanide. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The paper focuses on Alzheimer's disease trajectories in humans and does not mention nitazoxanide or report any pharmacokinetic parameters. |
| popPK | Oboh_2023 | irrelevant | 0 | 0 | The study focuses on the structure-activity relationships (SAR) of new anti-Cryptosporidium compounds, with nitazoxanide mentioned only as a comparator for potency and not as the subject of a pharmacokinetic study. |
| popPK | Ozturk_2021 | irrelevant | 0 | 0 | The paper is about thyroid shear wave elastography and contains no pharmacokinetic data for nitazoxanide. |
| popPK | Pepperrell_2020 | irrelevant | 2 | 1 | The paper is a safety and cost review that mentions qualitative PK observations (dose proportionality, food effect) but does not report quantitative disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Stachulski_2021 | irrelevant | 2 | 0 | This is a review article that summarizes literature and mentions preliminary PK/PD analyses, but does not provide specific quantitative PK parameters (CL, V, ka) for nitazoxanide in the provided text. |
| popPK | Tan_2020 | irrelevant | 0 | 0 | The paper concerns Alzheimer's disease biomarkers and does not involve the drug nitazoxanide or any pharmacokinetic parameters. |
| popPK | Tóth_2016 | irrelevant | 0 | 0 | The paper describes the synthesis and binding characteristics of neuromedin N, a neurotensin analog, and contains no data regarding nitazoxanide pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
