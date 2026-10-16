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
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Gu_2021_viral_RNA_level](drugs/drug_verteporfin/pd_Gu_2021_viral_RNA_level.md) | viral RNA level ← verteporfin · direct sigmoid Emax (Hill) effect | — | Gu C et al., Protoporphyrin IX and verteporfin poten…, Science bulletin (2021) | [10.1016/j.scib.2020.12.005](https://doi.org/10.1016/j.scib.2020.12.005) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Huang_2019_BKCa_channel_activity](drugs/drug_verteporfin/pd_Huang_2019_BKCa_channel_activity.md) | probability of BKCa-channel openings ← Verteporfin · direct sigmoid Emax (Hill) effect | — | Huang MH et al., Characterization of Perturbing Actions…, Frontiers in chemistry (2019) | [10.3389/fchem.2019.00566](https://doi.org/10.3389/fchem.2019.00566) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Huang_2019_IK_Ca](drugs/drug_verteporfin/pd_Huang_2019_IK_Ca.md) | Ca2+-activated K+ currents ← Verteporfin · direct sigmoid Emax (Hill) effect | — | Huang MH et al., Characterization of Perturbing Actions…, Frontiers in chemistry (2019) | [10.3389/fchem.2019.00566](https://doi.org/10.3389/fchem.2019.00566) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=verteporfin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: APOA1 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
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
