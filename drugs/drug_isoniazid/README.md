<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;isoniazid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Isoniazid_AlShaer2019_reference&quot;,&quot;label&quot;:&quot;Al-Shaer_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_isoniazid/Isoniazid_AlShaer2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Deshpande2018_reference&quot;,&quot;label&quot;:&quot;Deshpande_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_isoniazid/Isoniazid_Deshpande2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Calderin2025_reference&quot;,&quot;label&quot;:&quot;Calderin_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_isoniazid/Isoniazid_Calderin2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Tikiso2022_reference&quot;,&quot;label&quot;:&quot;Tikiso_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_isoniazid/Isoniazid_Tikiso2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# isoniazid

- **generic name:** isoniazid
- **ATC codes:** `J04AC01`, `J04AM01`, `J04AM02`, `J04AM03`, `J04AM04`, `J04AM05`, `J04AM06`, `J04AM07`, `J04AM09`, `J04AM12`
- **DrugBank:** [DB00951](https://go.drugbank.com/drugs/DB00951) · **PubChem:** [CID 3767](https://pubchem.ncbi.nlm.nih.gov/compound/3767)
- **molar mass:** 137.1393 g/mol (C6H7N3O) — DrugBank
- **groups:** approved, investigational

## About

Isoniazid is an antibiotic used to treat tuberculosis, including pulmonary and miliary forms. It is widely used as a key antituberculous medicine, available alone and in combination products, and is included on the WHO essential medicines list.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423169](https://www.wikidata.org/wiki/Q423169) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| isoniazid | parent | 137.139 | C6H7N3O | DrugBank | [3767](https://pubchem.ncbi.nlm.nih.gov/compound/3767) | Calderin_2025, Ju_2024 |
| pyrazinamide, isoniazid | metabolite | 123.11 | — | the paper | — | Calderin_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:20 | 3:24 | 2/1/3 | 0/0/0 | 0/0/0 | 287,795/14,752 | einfracz / qwen3.8-27b | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span> | [Al-Shaer_2019_reference](drugs/drug_isoniazid/Isoniazid_AlShaer2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Al-Shaer MH et al., Fluoroquinolones in Drug-Resistant Tube…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.00279-19](https://doi.org/10.1128/AAC.00279-19) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.417). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Deshpande_2018_reference](drugs/drug_isoniazid/Isoniazid_Deshpande2018_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Deshpande D et al., Antibacterial and Sterilizing Effect of…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.02232-17](https://doi.org/10.1128/AAC.02232-17) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.3). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Calderin_2025_reference](drugs/drug_isoniazid/Isoniazid_Calderin2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Calderin JM et al., Population pharmacokinetics of pyrazina…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00099-25](https://doi.org/10.1128/aac.00099-25) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Ju_2024_reference](drugs/drug_isoniazid/Isoniazid_Ju2024_reference.md) | — | 1-compartment (no model) | 0 | Ju G et al., Model-Informed Precision Dosing of Ison…, Drug design, development an… (2024) | [10.2147/DDDT.S434919](https://doi.org/10.2147/DDDT.S434919) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Tikiso_2022_reference](drugs/drug_isoniazid/Isoniazid_Tikiso2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Tikiso T et al., Population pharmacokinetics of ethambut…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkac127](https://doi.org/10.1093/jac/dkac127) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Soedarsono_2022_reference](drugs/drug_isoniazid/Isoniazid_Soedarsono2022_reference.md) | — | 1-compartment (no model) | 0 | Soedarsono S et al., Development of population pharmacokinet…, International journal of in… (2022) | [10.1016/j.ijid.2022.01.003](https://doi.org/10.1016/j.ijid.2022.01.003) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=isoniazid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2A6` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP2E1` inducer/inhibitor/substrate, `CYP3A4` inhibitor, `NAT2` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `NAT2` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 210 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 2  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Soedarsono_2022.pdf` | Soedarsono S et al., Development of population pharmacokinet…, International journal of in… (2022) | popPK | 10 | [10.1016/j.ijid.2022.01.003](https://doi.org/10.1016/j.ijid.2022.01.003) | [35017103](https://pubmed.ncbi.nlm.nih.gov/35017103) | The abstract provides specific numeric clearance values (55.9, 37.8, 17.7 L/h) for different NAT2 phenotypes, although other model parameters (V, etc.) may be in the full text or supplementary material. |

<sub>queue written 2026-10-07T13:17:53.140185+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Shaer_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fluoroquinolones (levofloxacin and moxifloxacin), not isoniazid, which is only a covariate. |
| popPK | Brooks_2023 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of the subject drug darunavir, using isoniazid only as a co-administered agent (probe) to assess interactions, and does not report quantitative disposition parameters for isoniazid. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper is an ecotoxicology study measuring effect concentrations (EC50) in *Daphnia magna*, not a pharmacokinetic study reporting disposition parameters for isoniazid. |
| popPK | Deshpande_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and antibacterial efficacy of benzylpenicillin and avibactam; isoniazid is mentioned only as a comparator for early bactericidal activity. |
| popPK | Li_2023 | irrelevant | 2 | 0 | This is a systematic review of population pharmacokinetic studies that summarizes findings (e.g., median clearance ratios) but does not provide original, extractable numeric parameter values (such as mean CL, V, or ka) for isoniazid. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rifapentine, and isoniazid is only mentioned as part of the co-administered regimen. |
| popPK | McIlleron_2019 | irrelevant | 2 | 1 | This is a review article; while it discusses population PK models for isoniazid, it explicitly states the specific models/parameters are in supplementary material which is not provided here, and lacks original numeric PK values in the main text. |
| popPK | Mitchison_2012 | relevant | 3 | 0 | The paper discusses the pharmacokinetic parameters (specifically peak concentrations vs. AUC) of isoniazid in the context of efficacy, but the provided evidence contains no specific numeric PK values (CL, V, t1/2, etc.) for isoniazid. |
| popPK | Muliaditan_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic meta-analysis of drug combinations in mice that does not report quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) for isoniazid. |
| popPK | Srivastava_2018 | irrelevant | 0 | 0 | The study focuses on the antimicrobial efficacy of clofazimine and isoniazid in an in vitro hollow-fiber model, not on the pharmacokinetic parameters (CL, V, etc.) of isoniazid itself. |
| popPK | Srivastava_2022 | irrelevant | 0 | 0 | This is an in vitro microbiological study (MIC and time-kill) evaluating drug efficacy against Mycobacterium kansasii, not a pharmacokinetic study of isoniazid. |
| popPK | Sturkenboom_2021 | irrelevant | 3 | 2 | The paper is a narrative review summarizing PK/PD targets (AUC/MIC) and referencing other studies for population PK model parameters; it does not report original quantitative compartmental PK parameters (CL, V, Q, ka) for isoniazid, with specific values limited to exposure targets and references. |
| popPK | Svensson_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rifampicin, and isoniazid is only mentioned as a co-administered drug without any PK parameters reported for it. |
| popPK | Tikiso_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for ethambutol, not isoniazid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:18 UTC</sub>
