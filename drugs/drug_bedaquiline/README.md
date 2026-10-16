<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;bedaquiline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bedaquiline_Shao2023_reference&quot;,&quot;label&quot;:&quot;Shao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bedaquiline/Bedaquiline_Shao2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bedaquiline_Zou2022_reference&quot;,&quot;label&quot;:&quot;Zou_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bedaquiline/Bedaquiline_Zou2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# bedaquiline

- **generic name:** bedaquiline
- **ATC codes:** `J04AK05`
- **DrugBank:** [DB08903](https://go.drugbank.com/drugs/DB08903) · **PubChem:** [CID 5388906](https://pubchem.ncbi.nlm.nih.gov/compound/5388906)
- **molar mass:** 555.505 g/mol (C32H31BrN2O2) — DrugBank
- **groups:** approved, investigational

## About

Bedaquiline is an antituberculous drug used to treat multidrug-resistant pulmonary tuberculosis. It is authorised in the European Union and is included on the WHO list of essential medicines, so it is used widely for this indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1257318](https://www.wikidata.org/wiki/Q1257318) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bedaquiline | parent | 555.505 | C32H31BrN2O2 | DrugBank | [5388906](https://pubchem.ncbi.nlm.nih.gov/compound/5388906) | Zou_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:23 | 23:33 | 1/0/1 | 2/0/2 | 0/0/0 | 169,218/10,244 | einfracz / qwen3.8-27b | 12 | 0/12 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span> | [Shao_2023_reference](drugs/drug_bedaquiline/Bedaquiline_Shao2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Shao G et al., Population pharmacokinetics and model-b…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1022090](https://doi.org/10.3389/fphar.2023.1022090) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: T1_cmax</sub><br><sub>route_to: `scholar`</sub> | [Zou_2022_reference](drugs/drug_bedaquiline/Bedaquiline_Zou2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Zou J et al., Population Pharmacokinetic Modeling of…, Antimicrobial agents and ch… (2022) | [10.1128/aac.00811-22](https://doi.org/10.1128/aac.00811-22) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Muliaditan_2021_fast_growing](drugs/drug_bedaquiline/pd_Muliaditan_2021_fast_growing.md) | fast-growing bacterial population ← bedaquiline · direct Emax (saturable) effect | — | Muliaditan M et al., Evaluation of pharmacokinetic-pharmacod…, British journal of clinical… (2021) | [10.1111/bcp.14371](https://doi.org/10.1111/bcp.14371) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Muliaditan_2021_slow_growing](drugs/drug_bedaquiline/pd_Muliaditan_2021_slow_growing.md) | slow-growing bacterial population ← bedaquiline · direct Emax (saturable) effect | — | Muliaditan M et al., Evaluation of pharmacokinetic-pharmacod…, British journal of clinical… (2021) | [10.1111/bcp.14371](https://doi.org/10.1111/bcp.14371) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Srivastava_2022_bacterial_burden](drugs/drug_bedaquiline/pd_Srivastava_2022_bacterial_burden.md) | bacterial burden ← bedaquiline · direct Emax (saturable) effect | — | Srivastava S et al., An overview of drugs for the treatment…, Journal of global antimicro… (2022) | [10.1016/j.jgar.2021.12.010](https://doi.org/10.1016/j.jgar.2021.12.010) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Muliaditan_2022_CFU](drugs/drug_bedaquiline/pd_Muliaditan_2022_CFU.md) | bacterial growth dynamics of fast-growing M. tuberculosis ← bedaquiline · direct Emax (saturable) effect | model (no simulator) | Muliaditan M et al., Bacterial growth dynamics and pharmacok…, British journal of pharmaco… (2022) | [10.1111/bph.15688](https://doi.org/10.1111/bph.15688) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Muliaditan_2022_CFU_2](drugs/drug_bedaquiline/pd_Muliaditan_2022_CFU_2.md) | bacterial growth dynamics of slow-growing M. tuberculosis ← bedaquiline · direct Emax (saturable) effect | model (no simulator) | Muliaditan M et al., Bacterial growth dynamics and pharmacok…, British journal of pharmaco… (2022) | [10.1111/bph.15688](https://doi.org/10.1111/bph.15688) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> | [Svensson_2017_MBL](drugs/drug_bedaquiline/pd_Svensson_2017_MBL.md) | mycobacterial load (MBL) ← bedaquiline · direct Emax (saturable) effect | model (no simulator) | Svensson EM et al., Modelling of mycobacterial load reveals…, The Journal of antimicrobia… (2017) | [10.1093/jac/dkx317](https://doi.org/10.1093/jac/dkx317) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bedaquiline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 59 matched, 20 returned
- **screened:** 2  ·  **relevant:** 4
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhu_2021.pdf` | Zhu H et al., Population pharmacokinetics of bedaquil…, The international journal o… (2021) | popPK | 10 | [10.5588/ijtld.21.0158](https://doi.org/10.5588/ijtld.21.0158) | [34886931](https://pubmed.ncbi.nlm.nih.gov/34886931) | The paper reports a population PK model for bedaquiline with specific numeric estimates for clearance, volumes, and intercompartmental clearances. |
| `Alghamdi_2021.pdf` | Alghamdi WA et al., Pharmacokinetics of bedaquiline, delama…, The Journal of antimicrobia… (2021) | popPK | 8 | [10.1093/jac/dkaa550](https://doi.org/10.1093/jac/dkaa550) | [33378452](https://pubmed.ncbi.nlm.nih.gov/33378452) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmin, AUC) for bedaquiline in humans, although specific compartmental parameters like clearance (CL) and volume (V) are not explicitly listed in the text. |
| `Jin_2025.pdf` | Jin J et al., Population pharmacokinetics of bedaquil…, European journal of clinica… (2025) | popPK | 5 | [10.1007/s00228-024-03788-1](https://doi.org/10.1007/s00228-024-03788-1) | [39779577](https://pubmed.ncbi.nlm.nih.gov/39779577) | This is a systematic review summarizing population PK data rather than reporting original quantitative disposition parameters, and the specific numeric values mentioned are relative changes (fold differences) or percentages rather than absolute PK parameters (CL, V, etc.) for bedaquiline. |

<sub>queue written 2026-10-07T12:01:20.346397+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelwahab_2026 | irrelevant | 1 | 0 | The paper focuses on pharmacodynamic QT prolongation modeling (PK/PD) and does not report quantitative PK disposition parameters (CL, V, etc.) for bedaquiline, relying on external PK models for simulations. |
| popPK | Ahmad_2024 | irrelevant | 0 | 0 | The text is a qualitative review/medication profile describing clinical use and mechanism without reporting any original quantitative pharmacokinetic parameter values for bedaquiline. |
| popPK | Gumbo_2020 | irrelevant | 0 | 0 | The paper reports in vitro MIC and efficacy data for bedaquiline against Mycobacterium abscessus, not pharmacokinetic parameters. |
| popPK | Jin_2025 | irrelevant | 5 | 2 | This is a systematic review summarizing population PK data rather than reporting original quantitative disposition parameters, and the specific numeric values mentioned are relative changes (fold differences) or percentages rather than absolute PK parameters (CL, V, etc.) for bedaquiline. |
| popPK | Kong_2025 | irrelevant | 1 | 0 | The study focuses on the population pharmacokinetics of the novel drug WX-081 (sudapyridine), with bedaquiline serving only as a comparator in the exposure-response analysis; no quantitative PK parameters for bedaquiline are reported. |
| popPK | Lin_2026 | irrelevant | 4 | 0 | The paper is a simulation study using an existing population PK model; it reports relative exposure differences (AUC/percentiles) rather than the underlying quantitative model parameters (CL, V, ka) for extraction. |
| popPK | Muliaditan_2021 | irrelevant | 1 | 0 | The study is a PK-PD modeling analysis in mice focused on antibacterial efficacy (EC50) and drug combinations rather than reporting quantitative disposition parameters (CL, V, t1/2) for bedaquiline. |
| popPK | Muliaditan_2022 | relevant | 3 | 6 | The paper reports PK-PD parameters (EC50) and cites specific PK values (Ka, CL/F) for bedaquiline in mice, but the primary focus is on bacterial dynamics and the PK data is secondary/extracted from other sources. |
| popPK | Nedelman_2020 | irrelevant | 0 | 0 | The paper focuses on the exposure-response modeling of pretomanid, with bedaquiline only mentioned as a component of the BPaL regimen and no PK parameters for bedaquiline are reported. |
| popPK | Srivastava_2022 | irrelevant | 0 | 0 | The paper is an in-vitro study of antimicrobial efficacy (MIC and time-kill) for Mycobacterium kansasii, not a pharmacokinetic study of bedaquiline. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of linezolid, not bedaquiline, which is only mentioned as a co-administered drug in the treatment regimen. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:01 UTC</sub>
