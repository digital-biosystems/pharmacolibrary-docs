<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01L&quot;,&quot;href&quot;:&quot;atc/S01L.md&quot;},{&quot;label&quot;:&quot;verteporfin&quot;}]"></div>

# verteporfin

- **generic name:** verteporfin
- **ATC codes:** `S01LA01`
- **DrugBank:** [DB00460](https://go.drugbank.com/drugs/DB00460) · **PubChem:** [CID 5362420](https://pubchem.ncbi.nlm.nih.gov/compound/5362420)
- **groups:** approved, investigational

## About

Verteporfin is a photosensitizer used in photodynamic therapy for eye conditions involving abnormal blood vessel growth, such as macular degeneration and degenerative myopia. It is authorised in the European Union and is used mainly in specialist ophthalmic care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q782318](https://www.wikidata.org/wiki/Q782318) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Gu_2021_viral_RNA_level](drugs/drug_verteporfin/pd_Gu_2021_viral_RNA_level.md) | viral RNA level ← verteporfin · direct sigmoid Emax (Hill) effect | — | Gu C et al., Protoporphyrin IX and verteporfin poten…, Science bulletin (2021) | [10.1016/j.scib.2020.12.005](https://doi.org/10.1016/j.scib.2020.12.005) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Huang_2019_BKCa_channel_activity](drugs/drug_verteporfin/pd_Huang_2019_BKCa_channel_activity.md) | probability of BKCa-channel openings ← Verteporfin · direct sigmoid Emax (Hill) effect | — | Huang MH et al., Characterization of Perturbing Actions…, Frontiers in chemistry (2019) | [10.3389/fchem.2019.00566](https://doi.org/10.3389/fchem.2019.00566) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Huang_2019_IK_Ca](drugs/drug_verteporfin/pd_Huang_2019_IK_Ca.md) | Ca2+-activated K+ currents ← Verteporfin · direct sigmoid Emax (Hill) effect | — | Huang MH et al., Characterization of Perturbing Actions…, Frontiers in chemistry (2019) | [10.3389/fchem.2019.00566](https://doi.org/10.3389/fchem.2019.00566) |

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
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:29 | 0:39 | 0/0/0 | 2/0/0 | 0/0/0 | 85,225/1,826 | einfracz / qwen3.8-27b | 5 | 2/3 | 4/1 | 0 |

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
