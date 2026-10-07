<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H05A&quot;,&quot;href&quot;:&quot;atc/H05A.md&quot;},{&quot;label&quot;:&quot;teriparatide&quot;}]"></div>

# teriparatide

- **generic name:** teriparatide
- **ATC codes:** `H05AA02`
- **DrugBank:** [DB06285](https://go.drugbank.com/drugs/DB06285) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Teriparatide, a parathyroid hormone analogue, is used to treat osteoporosis, including postmenopausal osteoporosis, and other bone diseases. It is an approved medicine with several authorised products in the European Union, mainly for osteoporosis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411781](https://www.wikidata.org/wiki/Q411781) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:03 | 1:42 | 0/0/0 | 3/0/0 | 0/0/0 | 153,823/5,330 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ose_2017_BMD](drugs/drug_teriparatide/pd_Ose_2017_BMD.md) | change in bone mineral density ← teriparatide acetate · stimulation effect | — | Ose A et al., Population Pharmacokinetic and Exposure…, Journal of clinical pharmac… (2017) | [10.1002/jcph.949](https://doi.org/10.1002/jcph.949) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sahbani_2019_PTHR1_internalization](drugs/drug_teriparatide/pd_Sahbani_2019_PTHR1_internalization.md) | PTHR1 internalization ← teriparatide · direct Emax (saturable) effect | — | Sahbani K et al., Abaloparatide exhibits greater osteoana…, Physiological reports (2019) | [10.14814/phy2.14225](https://doi.org/10.14814/phy2.14225) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sahbani_2019_arrestin](drugs/drug_teriparatide/pd_Sahbani_2019_arrestin.md) | β‐arrestin recruitment ← teriparatide · direct Emax (saturable) effect | — | Sahbani K et al., Abaloparatide exhibits greater osteoana…, Physiological reports (2019) | [10.14814/phy2.14225](https://doi.org/10.14814/phy2.14225) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sahbani_2019_cAMP](drugs/drug_teriparatide/pd_Sahbani_2019_cAMP.md) | intracellular cAMP ← teriparatide · direct Emax (saturable) effect | — | Sahbani K et al., Abaloparatide exhibits greater osteoana…, Physiological reports (2019) | [10.14814/phy2.14225](https://doi.org/10.14814/phy2.14225) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Satterwhite_2010_Calcium](drugs/drug_teriparatide/pd_Satterwhite_2010_Calcium.md) | serum calcium ← teriparatide · indirect response — drug stimulates the production of serum calcium | — | Satterwhite J et al., Pharmacokinetics of teriparatide (rhPTH…, Calcified tissue internatio… (2010) | [10.1007/s00223-010-9424-6](https://doi.org/10.1007/s00223-010-9424-6) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=teriparatide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PTH (modulator), PTH1R (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 56 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ose_2017.pdf` | Ose A et al., Population Pharmacokinetic and Exposure…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.949](https://doi.org/10.1002/jcph.949) | [28614613](https://pubmed.ncbi.nlm.nih.gov/28614613) | The paper describes a population PK model for teriparatide, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract evidence. |
| `Raykova_2022.pdf` | Raykova E et al., A randomized pharmacokinetic/pharmacody…, Expert opinion on biologica… (2022) | popPK | 9 | [10.1080/14712598.2021.1970742](https://doi.org/10.1080/14712598.2021.1970742) | [34405742](https://pubmed.ncbi.nlm.nih.gov/34405742) | The paper describes a PK bioequivalence study for teriparatide, but specific quantitative parameter values (CL, V, t1/2) are not provided in the abstract text. |

<sub>queue written 2026-10-07T10:03:01.405991+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Frost_2011 | irrelevant | 0 | 0 | The study reports PET parameters (K(i), SUV) for the radiotracer (18)F-fluoride, not the pharmacokinetic disposition parameters (CL, V, ka) of the drug teriparatide itself. |
| popPK | Guers_2017 | irrelevant | 0 | 0 | The study investigates the physiological effects of PTH on vascular endothelial function in rats, not the pharmacokinetic disposition parameters (clearance, volume, etc.) of teriparatide. |
| popPK | Langdahl_2017 | irrelevant | 0 | 0 | The study reports bone mineral density efficacy outcomes, not pharmacokinetic parameters, for teriparatide. |
| popPK | Mohanty_2024 | irrelevant | 0 | 0 | This is a clinical outcomes study evaluating surgical complications and patient-reported outcomes in patients taking teriparatide, with no reporting of pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Monzem_2023 | irrelevant | 0 | 0 | The study is a bone mechanobiology study in mice investigating structural changes (Micro-CT) after PTH (1-34) administration, reporting no pharmacokinetic parameters (CL, V, ka, t1/2). |
| popPK | Musso_1989 | irrelevant | 0 | 0 | The study investigates the renal vasodilator effects and pharmacodynamics of PTH fragments in isolated rat kidneys, not the pharmacokinetic disposition parameters (CL, V, etc.) of teriparatide. |
| popPK | Ose_2017 | relevant | 10 | 0 | The paper describes a population PK model for teriparatide, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract evidence. |
| popPK | Portales-Castillo_2022 | irrelevant | 0 | 0 | The paper is an in-vitro functional receptor study investigating PTH1R mutations and does not contain pharmacokinetic data for teriparatide. |
| popPK | Raykova_2022 | relevant | 9 | 0 | The paper describes a PK bioequivalence study for teriparatide, but specific quantitative parameter values (CL, V, t1/2) are not provided in the abstract text. |
| popPK | Rooney_2022 | irrelevant | 0 | 0 | The study focuses on histomorphometric analysis of bone formation and remodeling mechanisms, not the pharmacokinetic disposition parameters of teriparatide. |
| popPK | Sahbani_2019 | irrelevant | 0 | 0 | The paper is a mechanistic study comparing the bone anabolic effects and receptor signaling of teriparatide and abaloparatide in mice, containing no pharmacokinetic parameters. |
| popPK | Shingaki_2016 | irrelevant | 1 | 0 | The study measures the pharmacokinetics of the imaging tracer [18F]FDG to assess gastrointestinal motility, not the disposition parameters of teriparatide itself. |
| popPK | Stratford_2014 | irrelevant | 0 | 0 | The study evaluates a hybrid PTH-CBD peptide, not teriparatide, so it does not report PK parameters for the subject drug. |
| popPK | Tsujimoto_2012 | relevant | 4 | 0 | The study involves population pharmacokinetic analysis of teriparatide, but specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract/evidence, which only reports qualitative differences in AUC and Cmax. |
| popPK | Winer_2025 | irrelevant | 0 | 0 | The study reports bone health and growth outcomes in response to PTH 1-34 treatment, not pharmacokinetic parameters like clearance or volume. |
| popPK | Xiong_2022 | irrelevant | 1 | 0 | The study focuses on the production and in vitro characterization (binding and receptor stimulation) of a PTH-Fc fusion protein in plants, reporting no in vivo pharmacokinetic parameters (CL, V, t1/2) for teriparatide or the fusion. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
