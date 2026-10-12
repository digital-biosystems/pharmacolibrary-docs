<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;temocillin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Temocillin_Muller2023_reference&quot;,&quot;label&quot;:&quot;Muller_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_temocillin/Temocillin_Muller2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Temocillin_Ngougni2022_reference&quot;,&quot;label&quot;:&quot;Ngougni_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_temocillin/Temocillin_Ngougni2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Temocillin_van2024_reference&quot;,&quot;label&quot;:&quot;van_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_temocillin/Temocillin_van2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# temocillin

- **generic name:** temocillin
- **ATC codes:** `J01CA17`
- **DrugBank:** [DB12343](https://go.drugbank.com/drugs/DB12343) · **PubChem:** [CID 171758](https://pubchem.ncbi.nlm.nih.gov/compound/171758)
- **molar mass:** 414.45 g/mol (C16H18N2O7S2) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Temocillin is an antibiotic of the penicillin group with an extended spectrum, used to treat bacterial infections. It is not authorised across the whole European Union but is used in a limited number of European countries, mainly for serious infections caused by resistant gram-negative bacteria.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3983108](https://www.wikidata.org/wiki/Q3983108) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| temocillin | parent | 414.45 | C16H18N2O7S2 | DrugBank | [171758](https://pubchem.ncbi.nlm.nih.gov/compound/171758) | Muller_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:54 | 6:42 | 3/0/0 | 1/0/1 | 0/0/0 | 216,406/8,686 | einfracz / qwen3.8-27b | 13 | 1/6 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Muller_2023_reference](drugs/drug_temocillin/Temocillin_Muller2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Muller AE et al., Pharmacodynamics of Temocillin in Neutr…, Antimicrobial agents and ch… (2023) | [10.1128/aac.01433-22](https://doi.org/10.1128/aac.01433-22) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span> | [Ngougni_2022_reference](drugs/drug_temocillin/Temocillin_Ngougni2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ngougni Pokem P et al., Population Pharmacokinetics of Temocill…, Antibiotics (Basel, Switzer… (2022) | [10.3390/antibiotics11070898](https://doi.org/10.3390/antibiotics11070898) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [van_2024_reference](drugs/drug_temocillin/Temocillin_van2024_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | van Os W et al., Pharmacokinetic/pharmacodynamic model-b…, The Journal of antimicrobia… (2024) | [10.1093/jac/dkae243](https://doi.org/10.1093/jac/dkae243) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Alexandre_2018_fT_MIC](drugs/drug_temocillin/pd_Alexandre_2018_fT_MIC.md) | time above MIC ← temocillin · model not identified | — | Alexandre K et al., Pharmacokinetics and Pharmacodynamics o…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0584-7](https://doi.org/10.1007/s40262-017-0584-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Alexandre_2018_survival](drugs/drug_temocillin/pd_Alexandre_2018_survival.md) | in vivo survival ← temocillin · model not identified | — | Alexandre K et al., Pharmacokinetics and Pharmacodynamics o…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0584-7](https://doi.org/10.1007/s40262-017-0584-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.273). The first reading is what the record holds.">cross-check: disputed</span> | [van_2024_cfu_mL](drugs/drug_temocillin/pd_van_2024_cfu_mL.md) | total bacterial population ← temocillin · direct sigmoid Emax (Hill) effect | model (no simulator) | van Os W et al., Pharmacokinetic/pharmacodynamic model-b…, The Journal of antimicrobia… (2024) | [10.1093/jac/dkae243](https://doi.org/10.1093/jac/dkae243) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [van_2024_cfu_mL_2](drugs/drug_temocillin/pd_van_2024_cfu_mL_2.md) | resistant bacterial population ← temocillin · direct linear effect | model (no simulator) | van Os W et al., Pharmacokinetic/pharmacodynamic model-b…, The Journal of antimicrobia… (2024) | [10.1093/jac/dkae243](https://doi.org/10.1093/jac/dkae243) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 64 matched, 50 returned
- **screened:** 1  ·  **relevant:** 3
- **records:** 3  ·  extracted 3  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Leroy_1983.pdf` | Leroy A et al., Pharmacokinetics of temocillin (BRL 174…, The Journal of antimicrobia… (1983) | popPK | 10 | [10.1093/jac/12.1.47](https://doi.org/10.1093/jac/12.1.47) | [6619046](https://pubmed.ncbi.nlm.nih.gov/6619046) | The abstract explicitly reports quantitative PK parameters including clearance, volume of distribution, and half-life for temocillin. |
| `Li_2025.pdf` | Li L et al., Variable temocillin protein binding and…, British journal of clinical… (2025) | popPK | 10 | [10.1111/bcp.16397](https://doi.org/10.1111/bcp.16397) | [39840787](https://pubmed.ncbi.nlm.nih.gov/39840787) | Study is a population PK model of temocillin in humans, but specific numeric parameter estimates (CL, V, Q, etc.) are not listed in the provided text, only covariates and PTA outcomes. |
| `Miranda_2018.pdf` | Miranda Bastos AC et al., Temocillin dosing in haemodialysis pati…, The Journal of antimicrobia… (2018) | popPK | 10 | [10.1093/jac/dky078](https://doi.org/10.1093/jac/dky078) | [29579214](https://pubmed.ncbi.nlm.nih.gov/29579214) | The paper describes a population PK model for temocillin, but specific numeric parameter values (CL, V, Q) are not listed in the provided abstract or text excerpt, likely residing in the full text tables or supplementary material. |
| `Ngougni_2024.pdf` | Ngougni Pokem P et al., Population pharmacokinetics and dosing…, The Journal of antimicrobia… (2024) | popPK | 10 | [10.1093/jac/dkad398](https://doi.org/10.1093/jac/dkad398) | [38153240](https://pubmed.ncbi.nlm.nih.gov/38153240) | The paper describes a population PK model for temocillin in humans, but the specific numeric parameter values (CL, V, etc.) are not provided in the extracted evidence. |
| `Ngougni_2025.pdf` | Ngougni Pokem P et al., Population pharmacokinetics and dosing…, Clinical microbiology and i… (2025) | popPK | 10 | [10.1016/j.cmi.2024.12.015](https://doi.org/10.1016/j.cmi.2024.12.015) | [39734018](https://pubmed.ncbi.nlm.nih.gov/39734018) | The paper describes a population PK study for temocillin and reports descriptive statistics (Cmax, Cmin), but the specific model parameter estimates (CL, V, Q) are not listed in the provided text. |
| `Muller_2023.pdf` | Muller AE et al., Pharmacodynamics of Temocillin in Neutr…, Antimicrobial agents and ch… (2023) | popPK | 9 | [10.1128/aac.01433-22](https://doi.org/10.1128/aac.01433-22) | [36692307](https://pubmed.ncbi.nlm.nih.gov/36692307) | The study reports specific quantitative PK parameters (CL, V, protein binding) for temocillin in mice using a one-compartment model. |
| `Layios_2022.pdf` | Layios N et al., Modelled Target Attainment after Temoci…, Antimicrobial agents and ch… (2022) | popPK | 8 | [10.1128/AAC.02052-21](https://doi.org/10.1128/AAC.02052-21) | [35099273](https://pubmed.ncbi.nlm.nih.gov/35099273) | The study describes a population pharmacokinetic model for temocillin and reports specific ELF/plasma penetration ratios, but the actual quantitative disposition parameters (clearance, volume of distribution) are likely in the full text or supplementary material not fully provided in the abstract excerpt. |
| `De_2008.pdf` | De Jongh R et al., Continuous versus intermittent infusion…, The Journal of antimicrobia… (2008) | popPK | 7 | [10.1093/jac/dkm467](https://doi.org/10.1093/jac/dkm467) | [18070831](https://pubmed.ncbi.nlm.nih.gov/18070831) | The study is a population PK study of temocillin in humans, but the specific compartmental parameter values (CL, V, Q) are not listed in the text, which instead reports summary concentrations (Cmax, trough, stable levels). |

<sub>queue written 2026-10-07T10:52:39.029143+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | De_2008 | relevant | 7 | 4 | The study is a population PK study of temocillin in humans, but the specific compartmental parameter values (CL, V, Q) are not listed in the text, which instead reports summary concentrations (Cmax, trough, stable levels). |
| popPK | European_2018 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance in bacteria and contains no pharmacokinetic data for temocillin. |
| popPK | European_2019 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance in bacteria and contains no pharmacokinetic data for temocillin. |
| popPK | European_2022 | irrelevant | 0 | 0 | The paper is an antimicrobial resistance surveillance report and contains no pharmacokinetic data for temocillin. |
| popPK | European_2023 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance and contains no pharmacokinetic data for temocillin. |
| popPK | Goutelle_2023 | irrelevant | 2 | 1 | The study is a PK/PD simulation for dosage optimization that utilizes an existing population PK model for temocillin but does not report the underlying quantitative disposition parameters (CL, V, Q) in the text or provided tables. |
| popPK | Haseeb_2022 | irrelevant | 0 | 0 | The paper is a systematic review of beta-lactams where temocillin is mentioned in the final sentence but no quantitative pharmacokinetic parameters for temocillin are provided in the evidence. |
| popPK | Layios_2022 | relevant | 8 | 2 | The study describes a population pharmacokinetic model for temocillin and reports specific ELF/plasma penetration ratios, but the actual quantitative disposition parameters (clearance, volume of distribution) are likely in the full text or supplementary material not fully provided in the abstract excerpt. |
| popPK | Le_2011 | irrelevant | 0 | 0 | The paper reviews sugar metabolism and virulence in enterobacteria and does not mention temocillin or any pharmacokinetic data. |
| popPK | Li_2025 | relevant | 10 | 2 | Study is a population PK model of temocillin in humans, but specific numeric parameter estimates (CL, V, Q, etc.) are not listed in the provided text, only covariates and PTA outcomes. |
| popPK | Meesters_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ciprofloxacin, not temocillin. |
| popPK | Miranda_2018 | relevant | 10 | 3 | The paper describes a population PK model for temocillin, but specific numeric parameter values (CL, V, Q) are not listed in the provided abstract or text excerpt, likely residing in the full text tables or supplementary material. |
| popPK | Ngougni_2024 | relevant | 10 | 0 | The paper describes a population PK model for temocillin in humans, but the specific numeric parameter values (CL, V, etc.) are not provided in the extracted evidence. |
| popPK | Ngougni_2025 | relevant | 10 | 2 | The paper describes a population PK study for temocillin and reports descriptive statistics (Cmax, Cmin), but the specific model parameter estimates (CL, V, Q) are not listed in the provided text. |
| PGx | Rodríguez-Ochoa_2024 | not_relevant | 0 | 0 | The study evaluates the in vitro activity of temocillin against KPC-2-producing K. pneumoniae using a hollow-fibre infection model but does not report pharmacogenomic effects or human gene variant data. |
| popPK | Rodríguez-Ochoa_2025 | irrelevant | 2 | 0 | This is an in vitro pharmacodynamic (hollow-fiber) study that simulates human PK using a simplified elimination half-life (5h) rather than reporting quantitative disposition parameters (CL, V) derived from human or animal data. |
| popPK | Unemo_2024 | irrelevant | 0 | 0 | The paper characterizes antimicrobial resistance in Neisseria gonorrhoeae and reports MICs for temocillin as a test compound, but contains no pharmacokinetic or pharmacodynamic disposition parameters (CL, V, t1/2) for temocillin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:52 UTC</sub>
