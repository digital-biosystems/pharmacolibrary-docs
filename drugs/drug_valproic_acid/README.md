<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;valproic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ValproicAcid_Huo2025_reference&quot;,&quot;label&quot;:&quot;Huo_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_valproic_acid/ValproicAcid_Huo2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ValproicAcid_Zang2022_reference&quot;,&quot;label&quot;:&quot;Zang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_valproic_acid/ValproicAcid_Zang2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# valproic acid

- **generic name:** valproic acid
- **ATC codes:** `N03AG01`
- **DrugBank:** [DB00313](https://go.drugbank.com/drugs/DB00313) · **PubChem:** [CID 3121](https://pubchem.ncbi.nlm.nih.gov/compound/3121)
- **molar mass:** 144.2114 g/mol (C8H16O2) — DrugBank
- **groups:** approved, investigational

## About

Valproic acid is an antiepileptic drug used to treat epilepsy, including childhood absence epilepsy and complex partial seizures, and also bipolar disorder. It is widely used and appears on the WHO essential medicines list, though it carries a boxed warning as a developmental toxicant.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q240642](https://www.wikidata.org/wiki/Q240642) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| valproic acid (valproic_acid) | parent | 144.211 | C8H16O2 | DrugBank | [3121](https://pubchem.ncbi.nlm.nih.gov/compound/3121) | Teixeira-da-Silva_2022, Zang_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:00 | 6:24 | 2/3/1 | 1/0/1 | 0/0/0 | 252,939/47,967 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Huo_2025_reference](drugs/drug_valproic_acid/ValproicAcid_Huo2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Huo J et al., Dosing Optimization of Lamotrigine in P…, Drug design, development an… (2025) | [10.2147/DDDT.S541597](https://doi.org/10.2147/DDDT.S541597) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span> | [Zang_2022_reference](drugs/drug_valproic_acid/ValproicAcid_Zang2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Zang YN et al., Population pharmacokinetics of valproic…, European journal of clinica… (2022) | [10.1007/s00228-021-03246-2](https://doi.org/10.1007/s00228-021-03246-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Teixeira-da-Silva_2022_reference](drugs/drug_valproic_acid/ValproicAcid_TeixeiradaSilva2022_reference.md) | — | 1-compartment (no model) | 3 | Teixeira-da-Silva P et al., Population Pharmacokinetics of Valproic…, Pharmaceutics (2022) | [10.3390/pharmaceutics14040811](https://doi.org/10.3390/pharmaceutics14040811) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.286). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Methaneethorn_2018_reference](drugs/drug_valproic_acid/ValproicAcid_Methaneethorn2018_reference.md) | — | 1-compartment (no model) | 0 | Methaneethorn J, A systematic review of population pharm…, British journal of clinical… (2018) | [10.1111/bcp.13510](https://doi.org/10.1111/bcp.13510) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.333). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Serrano_1999_reference](drugs/drug_valproic_acid/ValproicAcid_Serrano1999_reference.md) | — | 1-compartment (no model) | 0 | Serrano BB et al., Valproate population pharmacokinetics i…, Journal of clinical pharmac… (1999) | [10.1046/j.1365-2710.1999.00202.x](https://doi.org/10.1046/j.1365-2710.1999.00202.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.333). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sitaruno_2024_reference](drugs/drug_valproic_acid/ValproicAcid_Sitaruno2024_reference.md) | — | 1-compartment (no model) | 0 | Sitaruno S et al., Population Pharmacokinetics and Loading…, Journal of clinical pharmac… (2024) | [10.1002/jcph.6102](https://doi.org/10.1002/jcph.6102) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Pasquereau_2021_HCoV_229E](drugs/drug_valproic_acid/pd_Pasquereau_2021_HCoV_229E.md) | human coronavirus (HCoV)-229E replication ← valproic acid · direct sigmoid Emax (Hill) effect | — | Pasquereau S et al., Resveratrol Inhibits HCoV-229E and SARS…, Viruses (2021) | [10.3390/v13020354](https://doi.org/10.3390/v13020354) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Nakashima_2015_over_50_reduction_in_seizure_frequency](drugs/drug_valproic_acid/pd_Nakashima_2015_over_50_reduction_in_seizure_frequency.md) | over 50% reduction in seizure frequency ← Predicted trough concentration of VPA · categorical (graded) response model | — | Nakashima H et al., Determination of the Optimal Concentrat…, PloS one (2015) | [10.1371/journal.pone.0141266](https://doi.org/10.1371/journal.pone.0141266) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=valproic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A5` inhibitor | DrugBank actor |
| absorption | liver | `SLCO2B1` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A5` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate, `SLC22A7` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2A6` substrate, `CYP2B6` substrate, `CYP2C19` inhibitor/substrate, `CYP2C9` inhibitor/substrate, `CYP3A4` inhibitor, `CYP3A5` substrate, `SLC22A7` substrate, `UGT1A1` inhibitor/substrate, `UGT1A3` substrate, `UGT1A4` substrate, `UGT1A6` substrate, `UGT1A9` substrate, `UGT2B15` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `CYP3A5` substrate, `UGT1A1` inhibitor/substrate, `UGT1A6` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor, `SLC22A8` inhibitor/substrate | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABAT (inhibitor), ACADSB (inhibitor), ALDH5A1 (inhibitor), CD274 (downregulator), CDKN1A (regulator), GSK3A (inhibitor), HDAC1 (inhibitor), HDAC2 (inhibitor), HDAC9 (inhibitor), HGF (inhibitor), ODC1 (downregulator), OGDH (inhibitor), PPARA (target), PPARD (target), PPARG (target), PTGS1 (substrate), SCN1A (inhibitor), SLC16A1 (substrate), UGT1A10 (substrate), UGT1A8 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 181 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 6  ·  extracted 2  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Serrano_1999.pdf` | Serrano BB et al., Valproate population pharmacokinetics i…, Journal of clinical pharmac… (1999) | popPK | 10 | [10.1046/j.1365-2710.1999.00202.x](https://doi.org/10.1046/j.1365-2710.1999.00202.x) | [10319910](https://pubmed.ncbi.nlm.nih.gov/10319910) | The abstract provides the specific quantitative population PK model equation for valproic acid clearance (CL) including coefficient values and covariate powers. |
| `Sitaruno_2024.pdf` | Sitaruno S et al., Population Pharmacokinetics and Loading…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.6102](https://doi.org/10.1002/jcph.6102) | [39073986](https://pubmed.ncbi.nlm.nih.gov/39073986) | The study reports a population PK model for valproic acid with specific numeric values for clearance (0.77 L/h) and volume of distribution (14.56 L) directly in the text. |
| `Zang_2022.pdf` | Zang YN et al., Population pharmacokinetics of valproic…, European journal of clinica… (2022) | popPK | 10 | [10.1007/s00228-021-03246-2](https://doi.org/10.1007/s00228-021-03246-2) | [34854947](https://pubmed.ncbi.nlm.nih.gov/34854947) | The paper reports a population pharmacokinetic model for valproic acid with specific quantitative parameters (Ka, CL/F, V/F) provided in the abstract and results text. |
| `Chen_2025.pdf` | Chen J et al., Dosing prediction of valproic acid in p…, European journal of clinica… (2025) | popPK | 8 | [10.1007/s00228-025-03874-y](https://doi.org/10.1007/s00228-025-03874-y) | [40617982](https://pubmed.ncbi.nlm.nih.gov/40617982) | The paper describes a population pharmacokinetic study for valproic acid in humans, but the specific numeric parameter estimates (CL, V, etc.) are not explicitly listed in the provided abstract text, only model performance metrics like F30. |
| `Methaneethorn_2018.pdf` | Methaneethorn J, A systematic review of population pharm…, British journal of clinical… (2018) | popPK | 5 | [10.1111/bcp.13510](https://doi.org/10.1111/bcp.13510) | [29328514](https://pubmed.ncbi.nlm.nih.gov/29328514) | This is a systematic review of population pharmacokinetic studies for valproic acid that reports aggregated numeric ranges for clearance and volume of distribution rather than original primary data. |

<sub>queue written 2026-10-07T07:54:31.344404+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bao_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for ziprasidone, not valproic acid. |
| popPK | Bettio_2025 | irrelevant | 2 | 1 | The study reports PK/PD parameters (EC50, B/P ratios) and ED50 values for valproic acid in rodents, but does not report quantitative disposition parameters like clearance, volume of distribution, or half-life with a volume. |
| popPK | Bouwmeester_2023 | irrelevant | 0 | 0 | The study is an in vitro toxicity assessment using valproic acid as a test compound to determine EC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Brouwers_1994 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic interactions where valproic acid is mentioned only as a drug affected by NSAIDs, without reporting any quantitative PK parameters for valproic acid itself. |
| popPK | Chen_2025 | relevant | 8 | 2 | The paper describes a population pharmacokinetic study for valproic acid in humans, but the specific numeric parameter estimates (CL, V, etc.) are not explicitly listed in the provided abstract text, only model performance metrics like F30. |
| popPK | Duda_2022 | irrelevant | 0 | 0 | The paper describes an in vitro gene expression study focusing on dose-response modeling for toxicity/efficacy, not pharmacokinetic disposition parameters. |
| popPK | Falcão_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of eslicarbazepine, and valproic acid is only a comparator co-administered drug. |
| popPK | Huo_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lamotrigine, with valproic acid mentioned only as a co-administered drug affecting lamotrigine clearance. |
| popPK | Isoherranen_2003 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of valnoctamide (VCD) and valpromide, using valproic acid only as a comparative efficacy benchmark without providing its quantitative PK parameters. |
| popPK | Mawasi_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sec-Butylpropylacetamide (SPD), a derivative of valproic acid, not valproic acid itself. |
| popPK | Pasquereau_2021 | irrelevant | 0 | 0 | The study is an in vitro antiviral screening where valproic acid is a comparator drug, and no pharmacokinetic parameters (CL, V, etc.) are reported for it. |
| popPK | Pigeolet_2007 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of levetiracetam, not valproic acid. |
| popPK | Tompson_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of retigabine and its interactions, not the disposition parameters of valproic acid itself. |
| popPK | Wong_2007 | irrelevant | 4 | 8 | The study focuses on mechanistic enzyme kinetics (autoactivation/Vmax/Ks) rather than standard population-PK parameters (CL, V, Q) for valproic acid, although PK data in sheep is present. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:57 UTC</sub>
