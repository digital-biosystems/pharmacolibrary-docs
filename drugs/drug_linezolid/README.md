<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;linezolid&quot;}]"></div>

# linezolid

- **generic name:** linezolid
- **ATC codes:** `J01XX08`
- **DrugBank:** [DB00601](https://go.drugbank.com/drugs/DB00601) · **PubChem:** [CID 441401](https://pubchem.ncbi.nlm.nih.gov/compound/441401)
- **molar mass:** 337.3461 g/mol (C16H20FN3O4) — DrugBank
- **groups:** approved, investigational

## About

Linezolid is an antibiotic used to treat serious bacterial infections, including pneumonia, skin infections such as cellulitis, urinary tract infections, and resistant staphylococcal infections like MRSA. It is an approved medicine and is included on the WHO list of essential medicines, so it is widely available for human use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411377](https://www.wikidata.org/wiki/Q411377) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| linezolid | parent | 337.346 | C16H20FN3O4 | DrugBank | [441401](https://pubchem.ncbi.nlm.nih.gov/compound/441401) | Bandín-Vilar_2022, Ngara_2025, Tian_2025, Xu_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 12:29 | 18:20 | 2/3/1 | 1/0/0 | 0/0/0 | 504,006/81,629 | einfracz / qwen3.8-27b | 10 | 2/8 | 9/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span> | [Bandín-Vilar_2022_reference](drugs/drug_linezolid/Linezolid_BandnVilar2022_reference.md) | — | 1-compartment (no model) | 2 | Bandín-Vilar E et al., A Review of Population Pharmacokinetic…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01125-2](https://doi.org/10.1007/s40262-022-01125-2) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Xu_2024_reference](drugs/drug_linezolid/Linezolid_Xu2024_reference.md) | — | 1-compartment (no model) | 2 | Xu J et al., Population Pharmacokinetic/Pharmacodyna…, Drug design, development an… (2024) | [10.2147/DDDT.S474470](https://doi.org/10.2147/DDDT.S474470) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Tian_2025_reference](drugs/drug_linezolid/Linezolid_Tian2025_reference.md) | — | 1-compartment (no model) | 0 | Tian X et al., Population pharmacokinetics and clinica…, Antimicrobial agents and ch… (2025) | [10.1128/aac.01299-24](https://doi.org/10.1128/aac.01299-24) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bock_2023_reference](drugs/drug_linezolid/Linezolid_Bock2023_reference.md) | — | 1-compartment (no model) | 0 | Bock M et al., Attainment of Target Antibiotic Levels…, Clinical infectious disease… (2023) | [10.1093/cid/ciad168](https://doi.org/10.1093/cid/ciad168) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.783). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Ngara_2025_estimates_rse](drugs/drug_linezolid/Linezolid_Ngara2025_estimates_rse.md) | — | 2-compartment (no model) | 9 | Ngara B et al., Translational Modeling of BTZ-043 to Pr…, The Journal of infectious d… (2025) | [10.1093/infdis/jiaf088](https://doi.org/10.1093/infdis/jiaf088) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.533). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Ngara_2025_estimates_rse_2](drugs/drug_linezolid/Linezolid_Ngara2025_estimates_rse_2.md) | — | 1-compartment (no model) | 5 | Ngara B et al., Translational Modeling of BTZ-043 to Pr…, The Journal of infectious d… (2025) | [10.1093/infdis/jiaf088](https://doi.org/10.1093/infdis/jiaf088) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.20).">human + animal</span> | [Vera-Yunca_2025_bacterial_load](drugs/drug_linezolid/pd_Vera_Yunca_2025_bacterial_load.md) | bacterial load ← linezolid · direct sigmoid Emax (Hill) effect | — | Vera-Yunca D et al., Model-based translation of the PKPD-rel…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf140](https://doi.org/10.1093/jac/dkaf140) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=linezolid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `MAOA` inhibitor, `MAOB` inhibitor | DrugBank actor |
| metabolism | liver | `MAOA` inhibitor | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 235 matched, 20 returned
- **screened:** 11  ·  **relevant:** 3
- **records:** 6  ·  extracted 2  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Crass_2019.pdf` | Crass RL et al., Reappraisal of Linezolid Dosing in Rena…, Antimicrobial agents and ch… (2019) | popPK | 10 | [10.1128/AAC.00605-19](https://doi.org/10.1128/AAC.00605-19) | [31109977](https://pubmed.ncbi.nlm.nih.gov/31109977) | The paper describes a population PK study for linezolid in humans with renal impairment, but the specific numeric parameter values (CL, V) are not explicitly listed in the provided abstract text, likely residing in the full text or supplementary tables. |
| `Qin_2025.pdf` | Qin Y et al., Toward precision dosing of linezolid in…, European journal of pharmac… (2025) | popPK | 10 | [10.1016/j.ejphar.2025.177777](https://doi.org/10.1016/j.ejphar.2025.177777) | [40447067](https://pubmed.ncbi.nlm.nih.gov/40447067) | The study reports a population PK model for linezolid in humans with typical values for CL (2.03 L/h) and Vd (38.5 L) explicitly listed in the abstract. |
| `Shi_2025.pdf` | Shi X et al., Population pharmacokinetics and thrombo…, The Journal of antimicrobia… (2025) | popPK | 9 | [10.1093/jac/dkaf147](https://doi.org/10.1093/jac/dkaf147) | [40358659](https://pubmed.ncbi.nlm.nih.gov/40358659) | The study develops a population PK model for linezolid in humans, but specific quantitative parameters (CL, V, Q) are not present in the provided abstract, which only reports an AUC threshold. |
| `Adembri_2008.pdf` | Adembri C et al., Linezolid pharmacokinetic/pharmacodynam…, International journal of an… (2008) | popPK | 8 | [10.1016/j.ijantimicag.2007.09.009](https://doi.org/10.1016/j.ijantimicag.2007.09.009) | [18055183](https://pubmed.ncbi.nlm.nih.gov/18055183) | Study reports PK/PD profiles and specific serum concentration ranges for linezolid in humans, but lacks explicit compartmental model parameters (CL, V). |
| `Wu_2022.pdf` | Wu C et al., Pharmacokinetic/Pharmacodynamic Paramet…, Journal of clinical pharmac… (2022) | popPK | 8 | [10.1002/jcph.2031](https://doi.org/10.1002/jcph.2031) | [35049077](https://pubmed.ncbi.nlm.nih.gov/35049077) | Study reports linezolid PK in sepsis patients but provides only Cmax and Monte Carlo target attainment probabilities, lacking specific disposition parameters (CL, V) in the text. |
| `Qin_2022.pdf` | Qin Y et al., Parametric population pharmacokinetics…, British journal of clinical… (2022) | popPK | 5 | [10.1111/bcp.15368](https://doi.org/10.1111/bcp.15368) | [35484096](https://pubmed.ncbi.nlm.nih.gov/35484096) | This is a systematic review of population PK studies for linezolid which reports summary median clearance values for various subpopulations, but it is a secondary source rather than a primary study providing full model parameter tables. |

<sub>queue written 2026-10-13T12:26:05.883473+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adembri_2008 | relevant | 8 | 4 | Study reports PK/PD profiles and specific serum concentration ranges for linezolid in humans, but lacks explicit compartmental model parameters (CL, V). |
| popPK | Bandín-Vilar_2022 | relevant | 5 | 2 | This is a narrative review of population pharmacokinetic studies for linezolid; while it cites specific values from original papers, it lacks a comprehensive, readable table of the central quantitative parameters (CL, Vd, Q, ka) for all studies, making systematic extraction of the full dataset difficult. |
| popPK | Bock_2023 | relevant | 6 | 2 | The study develops a population PK model for linezolid in humans, but the specific quantitative parameter estimates (CL, V, etc.) are listed in Supplementary Table 1, which is not included in the provided evidence. |
| popPK | Calderin_2025 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of dexamethasone, not linezolid; linezolid is only mentioned as a co-administered drug in the treatment regimen. |
| popPK | Crass_2019 | relevant | 10 | 2 | The paper describes a population PK study for linezolid in humans with renal impairment, but the specific numeric parameter values (CL, V) are not explicitly listed in the provided abstract text, likely residing in the full text or supplementary tables. |
| popPK | Gatti_2021 | irrelevant | 0 | 0 | The study analyzes serotonin syndrome reports involving linezolid as a co-administered drug and focuses on the PK/PD properties of the *serotonergic agents* (comparators), not the quantitative disposition parameters of linezolid itself. |
| popPK | Heidari_2023 | irrelevant | 1 | 0 | The text is an abstract of a review article summarizing inclusion/exclusion criteria, with no original quantitative pharmacokinetic parameters for linezolid reported. |
| popPK | Horcajada_2015 | irrelevant | 0 | 0 | The text is a review/opinion piece mentioning linezolid's potential role in CNS infections but provides no quantitative PK parameters or models. |
| popPK | Landersdorfer_2009 | irrelevant | 2 | 0 | This is a review article that discusses bone penetration ratios rather than reporting original quantitative population pharmacokinetic parameters (CL, V, Q, ka) for linezolid. |
| popPK | Liu_2024 | irrelevant | 1 | 0 | This is a literature review that does not report original quantitative PK parameters for linezolid, and no numeric values are present in the text. |
| popPK | Nedelman_2020 | irrelevant | 0 | 0 | The study focuses on the exposure-response modeling of pretomanid, with linezolid serving only as a co-administered drug in the BPaL regimen without any reported PK parameters for linezolid itself. |
| popPK | Ngara_2025 | relevant | 4 | 9 | The paper reports specific PK parameter values (CL/F, Vc/F, Ka) for linezolid in Table 2, but linezolid is a companion drug in a combination regimen rather than the sole subject of the investigation, and the data are from an animal model. |
| popPK | Qin_2022 | relevant | 5 | 4 | This is a systematic review of population PK studies for linezolid which reports summary median clearance values for various subpopulations, but it is a secondary source rather than a primary study providing full model parameter tables. |
| popPK | Rao_2020 | irrelevant | 2 | 0 | This is a review article that summarizes the role of TDM and references popPK studies but does not provide original quantitative parameter values or a specific PK model in the text. |
| popPK | Shi_2025 | relevant | 9 | 2 | The study develops a population PK model for linezolid in humans, but specific quantitative parameters (CL, V, Q) are not present in the provided abstract, which only reports an AUC threshold. |
| popPK | Vera-Yunca_2025 | irrelevant | 5 | 0 | The study focuses on PKPD modeling of bacterial dynamics in a mouse pneumonia model and does not report quantitative population pharmacokinetic parameters (CL, V, ka) for linezolid itself, using literature PK models instead. |
| popPK | Wu_2022 | relevant | 8 | 2 | Study reports linezolid PK in sepsis patients but provides only Cmax and Monte Carlo target attainment probabilities, lacking specific disposition parameters (CL, V) in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-13 12:26 UTC</sub>
