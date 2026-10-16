<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;linagliptin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Linagliptin_Retlich2010v2_reference&quot;,&quot;label&quot;:&quot;Retlich_2010_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/Linagliptin_Retlich2010v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Retlich_2015_DPP_4&quot;,&quot;label&quot;:&quot;Retlich_2015 \u00b7 DPP-4&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/pd_Retlich_2015_DPP_4.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# linagliptin

- **generic name:** linagliptin
- **ATC codes:** `A10BD11`, `A10BD19`, `A10BD27`, `A10BH05`
- **DrugBank:** [DB08882](https://go.drugbank.com/drugs/DB08882) · **PubChem:** [CID 10096344](https://pubchem.ncbi.nlm.nih.gov/compound/10096344)
- **molar mass:** 472.5422 g/mol (C25H28N8O2) — DrugBank
- **groups:** approved, investigational

## About

Linagliptin is a DPP-4 inhibitor used to lower blood sugar in adults with type 2 diabetes, available alone or in fixed oral combinations with other glucose-lowering drugs. It is approved and authorised in the European Union and is widely used as an oral anti-diabetic medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q909745](https://www.wikidata.org/wiki/Q909745) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| linagliptin | parent | 472.542 | C25H28N8O2 | DrugBank | [10096344](https://pubchem.ncbi.nlm.nih.gov/compound/10096344) | Graefe-Mody_2012, Retlich_2010_2, Retlich_2015, Tadayasu_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:42 | 2:49 | 1/3/0 | 2/0/0 | 0/0/0 | 153,432/10,235 | einfracz / qwen3.8-27b | 3 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Retlich_2010_2_reference](drugs/drug_linagliptin/Linagliptin_Retlich2010v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Retlich S et al., Pharmacokinetics and pharmacodynamics o…, Clinical pharmacokinetics (2010) | [10.2165/11536620-000000000-00000](https://doi.org/10.2165/11536620-000000000-00000) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.4), gpt-oss:120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Graefe-Mody_2012_reference](drugs/drug_linagliptin/Linagliptin_GraefeMody2012_reference.md) | — | 1-compartment (no model) | 6 | Graefe-Mody U et al., Clinical pharmacokinetics and pharmacod…, Clinical pharmacokinetics (2012) | [10.2165/11630900-000000000-00000](https://doi.org/10.2165/11630900-000000000-00000) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.409), gpt-oss:120b (not confirmed, agreement 0.409). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Retlich_2015_reference](drugs/drug_linagliptin/Linagliptin_Retlich2015_reference.md) | — | 1-compartment (no model) | 8 | Retlich S et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2015) | [10.1007/s40262-014-0232-4](https://doi.org/10.1007/s40262-014-0232-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.85), gpt-oss:120b (not confirmed, agreement 0.85). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Tadayasu_2013_reference](drugs/drug_linagliptin/Linagliptin_Tadayasu2013_reference.md) | — | 1-compartment (no model) | 8 | Tadayasu Y et al., Population pharmacokinetic/pharmacodyna…, Journal of pharmacy & pharm… (2013) | [10.18433/j3s304](https://doi.org/10.18433/j3s304) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Retlich_2015_DPP_4](drugs/drug_linagliptin/pd_Retlich_2015_DPP_4.md) | DPP-4 activity ← linagliptin · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Retlich S et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2015) | [10.1007/s40262-014-0232-4](https://doi.org/10.1007/s40262-014-0232-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> | [Tadayasu_2013_DPP_4_inhibition](drugs/drug_linagliptin/pd_Tadayasu_2013_DPP_4_inhibition.md) | DPP-4 inhibition ← linagliptin · target-mediated drug disposition | — | Tadayasu Y et al., Population pharmacokinetic/pharmacodyna…, Journal of pharmacy & pharm… (2013) | [10.18433/j3s304](https://doi.org/10.18433/j3s304) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=linagliptin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `SLC22A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A2` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DPP4 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Retlich_2010_2.pdf` | Retlich S et al., Pharmacokinetics and pharmacodynamics o…, Clinical pharmacokinetics (2010) | popPK | 10 | [10.2165/11536620-000000000-00000](https://doi.org/10.2165/11536620-000000000-00000) | [21053992](https://pubmed.ncbi.nlm.nih.gov/21053992) | The abstract provides explicit quantitative pharmacokinetic parameters including clearance (2.51-14.3 L/h, 26.9 L/h), volume of distribution (380-1540 L, 402.2 L), and half-life (126-139 h). |
| `Horie_2011.pdf` | Horie Y et al., Pharmacokinetic, pharmacodynamic, and t…, Clinical therapeutics (2011) | popPK | 9 | [10.1016/j.clinthera.2011.06.005](https://doi.org/10.1016/j.clinthera.2011.06.005) | [21723606](https://pubmed.ncbi.nlm.nih.gov/21723606) | The paper reports key PK parameters for linagliptin (half-life, accumulation ratio, AUC trends) in the abstract, but specific numeric values for clearance (CL) and volume (V) are not present in the provided text. |
| `Retlich_2010.pdf` | Retlich S et al., Impact of target-mediated drug disposit…, Journal of clinical pharmac… (2010) | popPK | 9 | [10.1177/0091270009356444](https://doi.org/10.1177/0091270009356444) | [20160157](https://pubmed.ncbi.nlm.nih.gov/20160157) | The paper describes a population PK/PD model for linagliptin in humans and reports specific values for clearance (CL/F 220 L/h) and half-life (~120 hours) in the text, although other detailed model parameters are likely in the full text or figures. |
| `Wu_2024.pdf` | Wu N et al., A Quantitative Systems Pharmacology Mod…, Journal of pharmaceutical s… (2024) | popPK | 9 | [10.1016/j.xphs.2023.09.006](https://doi.org/10.1016/j.xphs.2023.09.006) | [37716531](https://pubmed.ncbi.nlm.nih.gov/37716531) | The paper describes a QSP model for linagliptin in humans with specific PK components (2-comp, EHC, TMDD), but the actual numeric parameter values are not present in the provided text, likely residing in the supplementary material or code. |
| `Retlich_2009.pdf` | Retlich S et al., Binding to dipeptidyl peptidase-4 deter…, Biopharmaceutics & drug dis… (2009) | popPK | 8 | [10.1002/bdd.676](https://doi.org/10.1002/bdd.676) | [19771584](https://pubmed.ncbi.nlm.nih.gov/19771584) | The study reports PK parameters and a compartmental model for linagliptin in rats, but the specific numeric values are not present in the provided abstract. |
| `Graefe-Mody_2012.pdf` | Graefe-Mody U et al., Clinical pharmacokinetics and pharmacod…, Clinical pharmacokinetics (2012) | popPK | 7 | [10.2165/11630900-000000000-00000](https://doi.org/10.2165/11630900-000000000-00000) | [22568694](https://pubmed.ncbi.nlm.nih.gov/22568694) | The paper is a clinical pharmacokinetics review that reports qualitative PK features and approximate values for t1/2, Vd, and bioavailability, but specific numeric values for clearance (CL) and volume (V) parameters are not explicitly listed in the provided text. |

<sub>queue written 2026-10-14T23:40:19.022213+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Graefe-Mody_2012 | relevant | 7 | 4 | The paper is a clinical pharmacokinetics review that reports qualitative PK features and approximate values for t1/2, Vd, and bioavailability, but specific numeric values for clearance (CL) and volume (V) parameters are not explicitly listed in the provided text. |
| popPK | Ma_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of the novel compound OL3 (a linagliptin-TGR5 agonist conjugate); linagliptin is mentioned only as a structural component/comparator and no disposition parameters for free linagliptin are reported. |
| popPK | Retlich_2009 | relevant | 8 | 0 | The study reports PK parameters and a compartmental model for linagliptin in rats, but the specific numeric values are not present in the provided abstract. |
| popPK | Retlich_2010 | relevant | 9 | 4 | The paper describes a population PK/PD model for linagliptin in humans and reports specific values for clearance (CL/F 220 L/h) and half-life (~120 hours) in the text, although other detailed model parameters are likely in the full text or figures. |
| popPK | Rotbain_2023 | irrelevant | 0 | 0 | The study evaluates the effect of linagliptin on the biomarker suPAR and does not report pharmacokinetic parameters for linagliptin. |
| popPK | Wright_2012 | irrelevant | 4 | 0 | The paper describes a pharmacokinetic model and simulations for linagliptin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Wu_2024 | relevant | 9 | 0 | The paper describes a QSP model for linagliptin in humans with specific PK components (2-comp, EHC, TMDD), but the actual numeric parameter values are not present in the provided text, likely residing in the supplementary material or code. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:40 UTC</sub>
