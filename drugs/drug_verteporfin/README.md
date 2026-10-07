<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01L&quot;,&quot;href&quot;:&quot;atc/S01L.md&quot;},{&quot;label&quot;:&quot;verteporfin&quot;}]"></div>

# verteporfin

- **generic name:** verteporfin
- **ATC codes:** `S01LA01`
- **DrugBank:** [DB00460](https://go.drugbank.com/drugs/DB00460) · **PubChem:** [CID 5362420](https://pubchem.ncbi.nlm.nih.gov/compound/5362420)
- **groups:** approved, investigational

## About

Verteporfin is a photosensitizer used in photodynamic therapy for eye conditions involving abnormal blood vessel growth, such as macular degeneration and degenerative myopia. It is authorised in the European Union and is used mainly in specialist ophthalmic care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q782318](https://www.wikidata.org/wiki/Q782318) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:29 | 0:39 | 0/0/0 | 2/0/0 | 0/0/0 | 85,225/1,826 | einfracz / qwen3.8-27b | 5 | 2/3 | 4/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Gu_2021_viral_RNA_level](drugs/drug_verteporfin/pd_Gu_2021_viral_RNA_level.md) | viral RNA level ← verteporfin · direct sigmoid Emax (Hill) effect | — | Gu C et al., Protoporphyrin IX and verteporfin poten…, Science bulletin (2021) | [10.1016/j.scib.2020.12.005](https://doi.org/10.1016/j.scib.2020.12.005) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Huang_2019_BKCa_channel_activity](drugs/drug_verteporfin/pd_Huang_2019_BKCa_channel_activity.md) | probability of BKCa-channel openings ← Verteporfin · direct sigmoid Emax (Hill) effect | — | Huang MH et al., Characterization of Perturbing Actions…, Frontiers in chemistry (2019) | [10.3389/fchem.2019.00566](https://doi.org/10.3389/fchem.2019.00566) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Huang_2019_IK_Ca](drugs/drug_verteporfin/pd_Huang_2019_IK_Ca.md) | Ca2+-activated K+ currents ← Verteporfin · direct sigmoid Emax (Hill) effect | — | Huang MH et al., Characterization of Perturbing Actions…, Frontiers in chemistry (2019) | [10.3389/fchem.2019.00566](https://doi.org/10.3389/fchem.2019.00566) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=verteporfin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: APOA1 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | García-Fiñana_2010 | irrelevant | 0 | 0 | This is a clinical outcome study analyzing the effect of verteporfin photodynamic therapy on visual acuity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Ghazal_2017 | irrelevant | 0 | 0 | The paper is an in vitro photodynamic activity study where verteporfin is used only as a comparator, not a subject of PK analysis. |
| popPK | Gu_2021 | irrelevant | 0 | 0 | The paper is an antiviral efficacy study using verteporfin as a probe drug in vitro and in a mouse model, reporting no pharmacokinetic parameters (clearance, volume, half-life, etc.). |
| popPK | Huang_2019 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study investigating verteporfin's effects on ion channels, not a pharmacokinetic study, and it reports no disposition parameters (CL, V, ka, etc.). |
| popPK | Machacek_2016 | irrelevant | 0 | 0 | The study investigates the photodynamic activity and cytotoxicity of novel porphyrazines in vitro, with verteporfin serving only as a comparator for efficacy, not as the subject of a pharmacokinetic analysis. |
| popPK | Mae_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of photodynamic therapy efficacy on cell lines, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Nakada_2024 | irrelevant | 0 | 0 | The study investigates the photodynamic therapy efficacy and spectral properties of verteporfin in cancer cell lines, not its pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
