<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M09A&quot;,&quot;href&quot;:&quot;atc/M09A.md&quot;},{&quot;label&quot;:&quot;nusinersen&quot;}]"></div>

# nusinersen

- **generic name:** nusinersen
- **ATC codes:** `M09AX07`
- **DrugBank:** [DB13161](https://go.drugbank.com/drugs/DB13161) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Nusinersen is an antisense oligonucleotide medicine used to treat spinal muscular atrophy. It is authorised in the European Union and is an approved drug, used for this rare muscle-wasting condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25105466](https://www.wikidata.org/wiki/Q25105466) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:38 | 2:12 | 0/3/0 | 0/0/0 | 0/0/0 | 119,953/37,490 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Biliouris_2018_reference](drugs/drug_nusinersen/Nusinersen_Biliouris2018_reference.md) | — | 1-compartment (no model) | 0 | Biliouris K et al., A Semi-Mechanistic Population Pharmacok…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12323](https://doi.org/10.1002/psp4.12323) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Luu_2017_reference](drugs/drug_nusinersen/Nusinersen_Luu2017_reference.md) | — | 1-compartment (no model) | 0 | Luu KT et al., Population Pharmacokinetics of Nusiners…, Journal of clinical pharmac… (2017) | [10.1002/jcph.884](https://doi.org/10.1002/jcph.884) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [MacCannell_2022_reference](drugs/drug_nusinersen/Nusinersen_MacCannell2022_reference.md) | — | 1-compartment (no model) | 1 | MacCannell D et al., Restoration of Nusinersen Levels Follow…, CNS drugs (2022) | [10.1007/s40263-022-00899-0](https://doi.org/10.1007/s40263-022-00899-0) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nusinersen) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | brain | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: SMN1 (antisense oligonucleotide).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 12 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Luu_2017.pdf` | Luu KT et al., Population Pharmacokinetics of Nusiners…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.884](https://doi.org/10.1002/jcph.884) | [28369979](https://pubmed.ncbi.nlm.nih.gov/28369979) | The paper reports a population PK model for nusinersen with explicit numeric values for clearance, volume of distribution, and intercompartmental clearance in the abstract. |
| `MacCannell_2021.pdf` | MacCannell D et al., Population pharmacokinetics-based recom…, Neuromuscular disorders : N… (2021) | popPK | 9 | [10.1016/j.nmd.2021.02.014](https://doi.org/10.1016/j.nmd.2021.02.014) | [33781694](https://pubmed.ncbi.nlm.nih.gov/33781694) | The paper describes a population pharmacokinetic model for nusinersen and discusses resulting exposures, but the specific numeric parameter values (CL, V, etc.) are not provided in the text. |
| `Desai_2025.pdf` | Desai DA et al., Multispecies minimal physiologically ba…, Drug metabolism and disposi… (2025) | popPK | 5 | [10.1016/j.dmd.2025.100167](https://doi.org/10.1016/j.dmd.2025.100167) | [41100926](https://pubmed.ncbi.nlm.nih.gov/41100926) | The paper describes a PBPK model for nusinersen in humans and animals, and the abstract provides specific renal clearance values for multiple species (including 405 mL/h for humans), but does not explicitly list other parameters like Vd or CL/F. |

<sub>queue written 2026-10-07T03:37:13.023984+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Crawford_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for apitegromab where nusinersen is only a background therapy, with no PK parameters reported. |
| popPK | Desai_2025 | relevant | 5 | 3 | The paper describes a PBPK model for nusinersen in humans and animals, and the abstract provides specific renal clearance values for multiple species (including 405 mL/h for humans), but does not explicitly list other parameters like Vd or CL/F. |
| popPK | Duong_2021 | irrelevant | 0 | 0 | The study reports clinical efficacy and safety outcomes (motor and respiratory function) in SMA patients but does not report any pharmacokinetic or pharmacodynamic parameters (e.g., clearance, volume, half-life) for nusinersen. |
| popPK | Finkel_2022 | relevant | 5 | 2 | The paper applies a population PK model to nusinersen and reports derived PK/PD parameters (CSF steady-state concentrations, fold-changes, half-life description), but the specific compartmental parameter values (CL, V, Q, ka) are not listed in the evidence and are likely in the referenced supplementary material or figures. |
| popPK | MacCannell_2021 | relevant | 9 | 0 | The paper describes a population pharmacokinetic model for nusinersen and discusses resulting exposures, but the specific numeric parameter values (CL, V, etc.) are not provided in the text. |
| popPK | Pane_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for onasemnogene abeparvovec in SMA and does not report pharmacokinetic parameters for nusinersen, which is only mentioned as a prior comparator therapy. |
| popPK | Tisnikar_2026 | irrelevant | 0 | 0 | The study is an in vitro efficacy/mechanistic optimization using cell lines (HEK293, fibroblasts) and reports no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Vercoelen_2026 | irrelevant | 0 | 0 | The study evaluates lung function and respiratory muscle strength outcomes (FVC, FEV1, MEP) in SMA patients, not pharmacokinetic parameters (CL, V, t1/2) for nusinersen. |
| popPK | Yeo_2020 | irrelevant | 0 | 0 | This is a clinical outcome study for Spinal Muscular Atrophy assessing motor function scales, not a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:38 UTC</sub>
