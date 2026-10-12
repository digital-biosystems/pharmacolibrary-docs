<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;nelfinavir&quot;}]"></div>

# nelfinavir

- **generic name:** nelfinavir
- **ATC codes:** `J05AE04`
- **DrugBank:** [DB00220](https://go.drugbank.com/drugs/DB00220) · **PubChem:** [CID 64143](https://pubchem.ncbi.nlm.nih.gov/compound/64143)
- **molar mass:** 567.782 g/mol (C32H45N3O4S) — DrugBank
- **groups:** approved, investigational

## About

Nelfinavir is a protease inhibitor antiviral used to treat HIV infection and AIDS. It remains an approved medicine, although its product has been withdrawn in the European Union, so its use there is limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423366](https://www.wikidata.org/wiki/Q423366) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nelfinavir | parent | 567.782 | C32H45N3O4S | DrugBank | [64143](https://pubchem.ncbi.nlm.nih.gov/compound/64143) | Crommentuyn_2006, Hirt_2006, Hirt_2006_2, Jackson_2000 |
| M8 | metabolite | 583.788 | C32H45N3O5S | PubChem | [475066](https://pubchem.ncbi.nlm.nih.gov/compound/475066) | Crommentuyn_2006, Hirt_2006 |
| M8 (hydroxy-tert-butylamide) | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:28 | 8:41 | 0/2/2 | 2/0/0 | 0/0/0 | 414,290/28,496 | ollama / glm-5.3-flash | 8 | 1/7 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: F, Cl, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Hirt_2006_2_reference](drugs/drug_nelfinavir/Nelfinavir_Hirt2006v2_reference.md) | held back | 1-compartment, oral | 5 | Hirt D et al., Age-related effects on nelfinavir and M…, Antimicrobial agents and ch… (2006) | [10.1128/AAC.50.3.910-916.2006](https://doi.org/10.1128/AAC.50.3.910-916.2006) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Jackson_2000_reference](drugs/drug_nelfinavir/Nelfinavir_Jackson2000_reference.md) | — | 1-compartment (no model) | 2 | Jackson KA et al., A population pharmacokinetic analysis o…, Antimicrobial agents and ch… (2000) | [10.1128/AAC.44.7.1832-1837.2000](https://doi.org/10.1128/AAC.44.7.1832-1837.2000) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Crommentuyn_2006_reference](drugs/drug_nelfinavir/Nelfinavir_Crommentuyn2006_reference.md) | — | parent + metabolite (no model) | 2 | Crommentuyn KM et al., Population pharmacokinetics and pharmac…, The Pediatric infectious di… (2006) | [10.1097/01.inf.0000215242.70300.95](https://doi.org/10.1097/01.inf.0000215242.70300.95) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hirt_2006_reference](drugs/drug_nelfinavir/Nelfinavir_Hirt2006_reference.md) | — | parent + metabolite (no model) | 6 | Hirt D et al., Pregnancy-related effects on nelfinavir…, Antimicrobial agents and ch… (2006) | [10.1128/AAC.01596-05](https://doi.org/10.1128/AAC.01596-05) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gidari_2022_PFU_mL](drugs/drug_nelfinavir/pd_Gidari_2022_PFU_mL.md) | Viral titer (plaque-forming units) of SARS-CoV-2 strain 20A.EU1 ← nelfinavir · direct sigmoid Emax (Hill) effect | — | Gidari A et al., Nelfinavir: An Old Ally in the COVID-19…, Microorganisms (2022) | [10.3390/microorganisms10122471](https://doi.org/10.3390/microorganisms10122471) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gidari_2022_PFU_mL_2](drugs/drug_nelfinavir/pd_Gidari_2022_PFU_mL_2.md) | Viral titer (plaque-forming units) of SARS-CoV-2 strain B.1.1.7 ← nelfinavir · direct sigmoid Emax (Hill) effect | — | Gidari A et al., Nelfinavir: An Old Ally in the COVID-19…, Microorganisms (2022) | [10.3390/microorganisms10122471](https://doi.org/10.3390/microorganisms10122471) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gidari_2022_PFU_mL_3](drugs/drug_nelfinavir/pd_Gidari_2022_PFU_mL_3.md) | Viral titer (plaque-forming units) of SARS-CoV-2 strain P.1 ← nelfinavir · direct sigmoid Emax (Hill) effect | — | Gidari A et al., Nelfinavir: An Old Ally in the COVID-19…, Microorganisms (2022) | [10.3390/microorganisms10122471](https://doi.org/10.3390/microorganisms10122471) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gidari_2022_PFU_mL_4](drugs/drug_nelfinavir/pd_Gidari_2022_PFU_mL_4.md) | Viral titer (plaque-forming units) of SARS-CoV-2 strain B.1.617.2 ← nelfinavir · direct sigmoid Emax (Hill) effect | — | Gidari A et al., Nelfinavir: An Old Ally in the COVID-19…, Microorganisms (2022) | [10.3390/microorganisms10122471](https://doi.org/10.3390/microorganisms10122471) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Xie_2020_Nluc_signal](drugs/drug_nelfinavir/pd_Xie_2020_Nluc_signal.md) | SARS-CoV-2-Nluc luciferase signal (relative, normalized to DMSO control) in A549-hACE2 cells ← nelfinavir · direct sigmoid Emax (Hill) effect | — | Xie X et al., A nanoluciferase SARS-CoV-2 for rapid n…, Nature communications (2020) | [10.1038/s41467-020-19055-7](https://doi.org/10.1038/s41467-020-19055-7) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nelfinavir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor/substrate, `ABCG2` inhibitor, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor/substrate, `ABCG2` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor/substrate, `ABCG2` inhibitor, `SLCO1A2` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inhibitor, `CYP2C19` inducer/substrate, `CYP2C9` inducer, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `CYP3A7` inhibitor, `SLC22A1` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `UGT1A1` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 52 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Crommentuyn_2006.pdf` | Crommentuyn KM et al., Population pharmacokinetics and pharmac…, The Pediatric infectious di… (2006) | popPK | 10 | [10.1097/01.inf.0000215242.70300.95](https://doi.org/10.1097/01.inf.0000215242.70300.95) | [16732153](https://pubmed.ncbi.nlm.nih.gov/16732153) | Population PK model of nelfinavir and M8 in children with numeric CL/F and V/F values reported directly in the abstract. |
| `Hirt_2006_2.pdf` | Hirt D et al., Age-related effects on nelfinavir and M…, Antimicrobial agents and ch… (2006) | popPK | 10 | [10.1128/AAC.50.3.910-916.2006](https://doi.org/10.1128/AAC.50.3.910-916.2006) | [16495250](https://pubmed.ncbi.nlm.nih.gov/16495250) | Population PK model for nelfinavir with numeric CL, V, ka, and M8 parameters reported directly in the abstract. |
| `Jackson_2000.pdf` | Jackson KA et al., A population pharmacokinetic analysis o…, Antimicrobial agents and ch… (2000) | popPK | 10 | [10.1128/AAC.44.7.1832-1837.2000](https://doi.org/10.1128/AAC.44.7.1832-1837.2000) | [10858338](https://pubmed.ncbi.nlm.nih.gov/10858338) | Population PK (NONMEM) of nelfinavir in HIV patients with numeric CL/F values (41.9–45.1 L/h) reported directly in the abstract. |
| `Methaneethorn_2014.pdf` | Methaneethorn J et al., Pharmacokinetic modeling of simvastatin…, Annual International Confer… (2014) | popPK | 8 | [10.1109/EMBC.2014.6944925](https://doi.org/10.1109/EMBC.2014.6944925) | [25571293](https://pubmed.ncbi.nlm.nih.gov/25571293) | Population/compartmental PK model of nelfinavir (parent-metabolite) in humans is described, but no numeric parameter values appear in the evidence. |
| `Pellegrin_2002.pdf` | Pellegrin I et al., Virologic response to nelfinavir-based…, AIDS (London, England) (2002) | popPK | 6 | [10.1097/00002030-200207050-00004](https://doi.org/10.1097/00002030-200207050-00004) | [12131209](https://pubmed.ncbi.nlm.nih.gov/12131209) | Population PK analysis of nelfinavir (Cmin, Cmax, AUC) in HIV patients is described, but no numeric parameter values (only a Cmin threshold of 1 mg/l) appear in the evidence. |

<sub>queue written 2026-10-07T17:20:28.054700+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arshad_2020 | irrelevant | 2 | 1 | This is a drug-repurposing prioritization analysis using published Cmax values and predicted lung partitioning for many drugs including nelfinavir; it reports no original PK disposition parameters (CL, V, ka, half-life with volume, or population-PK model) for nelfinavir, and numeric values largely live in supplementary tables/figures not provided. |
| popPK | Burk_2021 | irrelevant | 1 | 1 | In-vitro mechanistic study of nelfinavir's PXR interaction; no PK disposition parameters (CL, V, half-life, population-PK model) reported. |
| popPK | Chan_2013 | irrelevant | 0 | 0 | In-vitro antiviral screening study; nelfinavir is only a tested compound with no PK parameters reported. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | This is a review of lopinavir/ritonavir; nelfinavir appears only as a comparator with no PK parameters for nelfinavir reported. |
| popPK | Ford_2004 | irrelevant | 3 | 4 | Non-compartmental AUC/Cmin exposure data for nelfinavir and M8 are present, but no clearance, volume, half-life, or population-PK model parameters are reported. |
| popPK | Francis_2021 | irrelevant | 0 | 0 | Nelfinavir is only a co-administered comparator affecting medroxyprogesterone acetate PK; no nelfinavir disposition parameters are reported. |
| popPK | Gaucher_2004 | irrelevant | 1 | 2 | In vitro prodrug chemistry study; only chemical hydrolysis half-lives, no PK disposition parameters for nelfinavir. |
| popPK | Gidari_2022 | irrelevant | 1 | 2 | In-vitro antiviral potency study (EC50/EC90 in Vero E6 cells) with only literature-derived Cmax ratios; no PK disposition parameters (CL, V, half-life, PK model) for nelfinavir are reported. |
| popPK | Hattori_2020 | irrelevant | 0 | 0 | In-vitro antiviral study of SARS-CoV-2 Mpro inhibitors; nelfinavir is only a comparator with EC50/cytotoxicity data, no PK parameters. |
| popPK | Methaneethorn_2014 | relevant | 8 | 3 | Population/compartmental PK model of nelfinavir (parent-metabolite) in humans is described, but no numeric parameter values appear in the evidence. |
| popPK | Millán_2005 | irrelevant | 1 | 1 | Nelfinavir is only a co-administered HAART component; the PK parameters reported are for mycophenolic acid, not nelfinavir. |
| popPK | Panhard_2007 | irrelevant | 0 | 0 | Nelfinavir appears only as a co-administered drug/covariate; the PK parameters reported are for lamivudine, stavudine and zidovudine, not nelfinavir. |
| popPK | Pellegrin_2002 | relevant | 6 | 3 | Population PK analysis of nelfinavir (Cmin, Cmax, AUC) in HIV patients is described, but no numeric parameter values (only a Cmin threshold of 1 mg/l) appear in the evidence. |
| popPK | Pfister_2002 | irrelevant | 2 | 3 | Nelfinavir is only a co-administered interacting drug; the PK model and parameters (amprenavir clearance) are for amprenavir, not nelfinavir itself. |
| popPK | Xie_2020 | irrelevant | 0 | 0 | In vitro antiviral screening study (SARS-CoV-2-Nluc); nelfinavir is only a screened inhibitor with EC50 values, no PK disposition parameters. |
| popPK | Xu_2023 | irrelevant | 3 | 2 | This is an efficacy/clinical study of nelfinavir for COVID-19; only sparse concentration data (Cmax, C5h, trough) appear, with detailed PK values in supplementary tables not provided, and no CL/V/compartmental parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:20 UTC</sub>
