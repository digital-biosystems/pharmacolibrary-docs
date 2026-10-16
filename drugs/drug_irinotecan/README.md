<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;irinotecan&quot;}]"></div>

# irinotecan

- **generic name:** irinotecan
- **ATC codes:** `L01CE02`, `L01XX19`
- **DrugBank:** [DB00762](https://go.drugbank.com/drugs/DB00762) · **PubChem:** [CID 60838](https://pubchem.ncbi.nlm.nih.gov/compound/60838)
- **molar mass:** 586.678 g/mol (C33H38N4O6) — DrugBank
- **groups:** approved, investigational

## About

Irinotecan is a topoisomerase I inhibitor used as an anticancer medicine, mainly for colorectal and pancreatic cancers and also for several other cancers such as lung, breast, stomach and brain tumours. It remains in use, is authorised in the European Union, and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412197](https://www.wikidata.org/wiki/Q412197) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| irinotecan | parent | 586.678 | C33H38N4O6 | DrugBank | [60838](https://pubchem.ncbi.nlm.nih.gov/compound/60838) | Zhu_2023 |
| SN-38 | metabolite | 392.411 | C22H20N2O5 | PubChem | [104842](https://pubchem.ncbi.nlm.nih.gov/compound/104842) | Zhu_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:20 | 4:58 | 0/4/0 | 0/1/1 | 0/0/0 | 364,541/28,312 | einfracz / qwen3.8-27b | 16 | 10/6 | 7/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Adiwijaya_2017_reference](drugs/drug_irinotecan/Irinotecan_Adiwijaya2017_reference.md) | — | parent + metabolite (no model) | 0 | Adiwijaya BS et al., Population Pharmacokinetics of Liposoma…, Clinical pharmacology and t… (2017) | [10.1002/cpt.720](https://doi.org/10.1002/cpt.720) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Friberg_2002_cpt_11](drugs/drug_irinotecan/Irinotecan_Friberg2002_cpt_11.md) | — | 1-compartment (no model) | 1 | Friberg LE et al., Model of chemotherapy-induced myelosupp…, Journal of clinical oncolog… (2002) | [10.1200/JCO.2002.02.140](https://doi.org/10.1200/JCO.2002.02.140) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Friberg_2002_dmdc](drugs/drug_irinotecan/Irinotecan_Friberg2002_dmdc.md) | — | 1-compartment (no model) | 1 | Friberg LE et al., Model of chemotherapy-induced myelosupp…, Journal of clinical oncolog… (2002) | [10.1200/JCO.2002.02.140](https://doi.org/10.1200/JCO.2002.02.140) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhu_2023_reference](drugs/drug_irinotecan/Irinotecan_Zhu2023_reference.md) | — | parent + metabolite (no model) | 0 | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Zhu_2023_PDTO_volume](drugs/drug_irinotecan/pd_Zhu_2023_PDTO_volume.md) | PDTO volume ← SN-38 · direct sigmoid Emax (Hill) effect | — | Zhu J et al., Translational Pharmacokinetic/Pharmacod…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Schwarcz_2024_MTT](drugs/drug_irinotecan/pd_Schwarcz_2024_MTT.md) | cell proliferation ← irinotecan · direct sigmoid Emax (Hill) effect | — | Schwarcz S et al., Cytostatic Bacterial Metabolites Interf…, Molecules (Basel, Switzerla… (2024) | [10.3390/molecules29133073](https://doi.org/10.3390/molecules29133073) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=irinotecan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` substrate | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CES2` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `CYP3A7` substrate, `SLCO1B1` inhibitor, `UGT1A1` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | small intestine | `CES2` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCC2` substrate | DrugBank actor |
| excretion | liver | `ABCC2` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: TOP1 (inhibitor), TOP1MT (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 95 matched, 20 returned
- **screened:** 16  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chabot_1998.pdf` | Chabot GG et al., [Irinotecan pharmacokinetics], Bulletin du cancer Spec No:… (1998) | popPK | 10 | not captured | [9932079](https://pubmed.ncbi.nlm.nih.gov/9932079) | The abstract provides clear quantitative PK parameters (CL, Vss, t1/2) for irinotecan in humans, though specific model estimates (e.g., Q, ka) are not detailed in the provided text. |

<sub>queue written 2026-10-07T18:16:39.923615+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Casanova_2023 | irrelevant | 3 | 1 | The study focuses on regorafenib PK; irinotecan is only a co-administered comparator drug for DDI assessment, and specific irinotecan PK values are located in Supplementary Figures not provided. |
| popPK | Chabot_1997_2 | relevant | 4 | 5 | The paper is a review that summarizes quantitative pharmacokinetic parameters (CL, Vss, t1/2) for irinotecan and SN-38 from clinical trials, rather than presenting original population-PK modeling data. |
| popPK | Cohn_2017 | irrelevant | 0 | 0 | The study analyzes the exposure-response relationship of ramucirumab, using irinotecan only as part of the background FOLFIRI chemotherapy regimen without reporting irinotecan PK parameters. |
| popPK | Cui_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for envafolimab, a PD-L1 antibody, not for irinotecan. |
| popPK | Friberg_2002_2 | irrelevant | 0 | 0 | The study models pharmacodynamics (myelosuppression) rather than pharmacokinetics, and provides no quantitative PK parameter values for irinotecan. |
| popPK | Gehle_2025 | irrelevant | 0 | 0 | This is an in vitro/in vivo sensitivity study measuring drug efficacy (EC50/tumor response), not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution for irinotecan. |
| popPK | Goey_2016 | irrelevant | 0 | 0 | The paper is a review focused on belinostat pharmacokinetics and UGT1A1 polymorphisms, with irinotecan mentioned only as a comparator example without original quantitative data. |
| popPK | Goteti_2010 | irrelevant | 2 | 0 | This is a PK/PD modeling study focused on tumor growth dynamics and dose scheduling in mice, using irinotecan as one of two agents, but it does not report quantitative disposition parameters (CL, V, ka, etc.) for irinotecan itself in the provided text. |
| popPK | Hahn_2019 | irrelevant | 2 | 1 | The paper is a narrative review discussing pharmacokinetic models and pharmacogenetics of irinotecan, but the evidence provided consists only of the abstract and metadata, which does not contain original numeric parameter values (CL, V, Q, etc.). |
| popPK | Lévi_2000 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of oxaliplatin, and irinotecan is only mentioned as a co-administered drug with no specific PK parameters reported for it. |
| popPK | Modest_2025 | irrelevant | 0 | 0 | The paper reports patient-reported outcomes (quality of life) in a clinical trial for sotorasib plus panitumumab, with no pharmacokinetic data for irinotecan. |
| popPK | Schwarcz_2024 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay (IC50/Hill coefficient) in 4T1 breast cancer cells, not a pharmacokinetic study reporting disposition parameters like clearance or volume for irinotecan. |
| popPK | Wu_2020 | irrelevant | 2 | 0 | The study uses irinotecan in a mouse model to test combination chemotherapy efficacy and focuses on in vitro Hill coefficients and survival outcomes rather than reporting quantitative PK parameters (CL, V, etc.) for irinotecan. |
| popPK | Yanaihara_2007 | irrelevant | 4 | 0 | The study mentions that amrubicin did not affect irinotecan pharmacokinetics but provides no quantitative PK parameters (CL, V, etc.) in the text. |
| popPK | Zarnoosheh_2024 | irrelevant | 0 | 0 | The paper describes the generation of antibodies and development of an ELISA assay for SN-38, not a pharmacokinetic study with disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:17 UTC</sub>
