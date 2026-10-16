<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Pyronaridine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pyronaridine_Tan2009_reference&quot;,&quot;label&quot;:&quot;Tan_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/Pyronaridine_Tan2009_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyronaridine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/Pyronaridine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Pyronaridine

- **generic name:** Pyronaridine
- **ATC codes:** `P01BF06`
- **DrugBank:** [DB12975](https://go.drugbank.com/drugs/DB12975) · **PubChem:** [CID 5485198](https://pubchem.ncbi.nlm.nih.gov/compound/5485198)
- **molar mass:** 518.06 g/mol (C29H32ClN5O2) — DrugBank
- **groups:** investigational

## About

Pyronaridine is an antimalarial drug used to treat malaria, available as a combination with an artemisinin derivative. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7263674](https://www.wikidata.org/wiki/Q7263674) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pyronaridine | parent | 518.06 | C29H32ClN5O2 | DrugBank | [5485198](https://pubchem.ncbi.nlm.nih.gov/compound/5485198) | Ayyoub_2015, Kang_2024 |
| artesunate | metabolite | 384.425 | C19H28O8 | PubChem | [6917864](https://pubchem.ncbi.nlm.nih.gov/compound/6917864) | Kang_2024 |
| dihydroartemisinin | metabolite | 284.352 | C15H24O5 | PubChem | [107770](https://pubchem.ncbi.nlm.nih.gov/compound/107770) | Kang_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:31 | 4:58 | 1/2/3 | 2/0/1 | 0/0/0 | 256,261/28,141 | einfracz / qwen3.8-27b | 11 | 0/11 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.579). Primary extraction retained.">cross-check: disputed</span> | [Tan_2009_reference](drugs/drug_pyronaridine/Pyronaridine_Tan2009_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Tan B et al., Population pharmacokinetics of artesuna…, Malaria journal (2009) | [10.1186/1475-2875-8-304](https://doi.org/10.1186/1475-2875-8-304) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.529). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Ayyoub_2015_median_value_for_estimate](drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_median_value_for_estimate.md) | — | 1-compartment (no model) | 4 (+2 cov.) | Ayyoub A et al., Population Pharmacokinetics of Pyronari…, Antimicrobial agents and ch… (2015) | [10.1128/AAC.02004-15](https://doi.org/10.1128/AAC.02004-15) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.529). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Ayyoub_2015_median_value_for_rse](drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_median_value_for_rse.md) | held back | 1-compartment, oral | 5 (+2 cov.) | Ayyoub A et al., Population Pharmacokinetics of Pyronari…, Antimicrobial agents and ch… (2015) | [10.1128/AAC.02004-15](https://doi.org/10.1128/AAC.02004-15) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.545). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Chairat_2018_reference](drugs/drug_pyronaridine/Pyronaridine_Chairat2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Chairat K et al., Enantiospecific pharmacokinetics and dr…, The Journal of antimicrobia… (2018) | [10.1093/jac/dky297](https://doi.org/10.1093/jac/dky297) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.529). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Ayyoub_2015_median_value_for_cv](drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_median_value_for_cv.md) | — | 1-compartment (no model) | 1 | Ayyoub A et al., Population Pharmacokinetics of Pyronari…, Antimicrobial agents and ch… (2015) | [10.1128/AAC.02004-15](https://doi.org/10.1128/AAC.02004-15) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.44). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Kang_2024_reference](drugs/drug_pyronaridine/Pyronaridine_Kang2024_reference.md) | — | parent + metabolite (no model) | 8 | Kang DW et al., Inter-Species Pharmacokinetic Modeling…, International journal of mo… (2024) | [10.3390/ijms25136998](https://doi.org/10.3390/ijms25136998) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Alin_1990_Growth_inhibition](drugs/drug_pyronaridine/pd_Alin_1990_Growth_inhibition.md) | Growth inhibition ← pyronaridine · direct sigmoid Emax (Hill) effect | — | Alin MH et al., In vitro activity of artemisinin, its d…, Transactions of the Royal S… (1990) | [10.1016/0035-9203(90)90129-3](https://doi.org/10.1016/0035-9203(90)90129-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gendrot_2020_SARS_CoV_2_replication](drugs/drug_pyronaridine/pd_Gendrot_2020_SARS_CoV_2_replication.md) | SARS-CoV-2 replication ← Pyronaridine · direct sigmoid Emax (Hill) effect | — | Gendrot M et al., Antimalarial drugs inhibit the replicat…, Travel medicine and infecti… (2020) | [10.1016/j.tmaid.2020.101873](https://doi.org/10.1016/j.tmaid.2020.101873) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span> | [Felices_2025_QTcF](drugs/drug_pyronaridine/pd_Felices_2025_QTcF.md) | Fridericia-corrected QT interval ← pyronaridine · direct linear effect | model (no simulator) | Felices M et al., Concentration-Response Analysis of the…, Clinical and translational… (2025) | [10.1111/cts.70305](https://doi.org/10.1111/cts.70305) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 6  ·  extracted 1  ·  needs_review 3  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abla_2024 | irrelevant | 2 | 2 | The study is a PBPK simulation using pre-existing models to predict tissue concentrations for repurposing in COVID-19, not a primary study measuring or fitting population PK parameters (CL, V, etc.) for pyronaridine. |
| popPK | Alin_1990 | irrelevant | 0 | 0 | This is an in vitro antimalarial activity study measuring efficacy (EC50) against Plasmodium, not a pharmacokinetic study reporting disposition parameters for pyronaridine. |
| popPK | Anantpadma_2019 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study for Ebola virus, not a pharmacokinetic study for pyronaridine. |
| popPK | Chairat_2018 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of primaquine and its metabolite carboxyprimaquine, with pyronaridine used only as a co-administered drug in a drug-drug interaction analysis. |
| popPK | Ekins_2015 | irrelevant | 0 | 0 | The study is a drug discovery/efficacy paper for Chagas disease, not a pharmacokinetic study, and does not report any disposition parameters (CL, V, etc.) for pyronaridine. |
| popPK | Felices_2025 | irrelevant | 2 | 0 | The study focuses on the concentration-QTc relationship (cardiotoxicity) rather than reporting quantitative disposition parameters (CL, V, etc.) for pyronaridine, with PK data referred to a separate publication [18]. |
| popPK | Gendrot_2020 | irrelevant | 1 | 1 | The paper is an in vitro antiviral activity study against SARS-CoV-2, not a pharmacokinetic study; while it cites literature values for Cmax and t1/2, it does not generate original PK disposition parameters (CL, V, Q, ka) or compartmental models for pyronaridine. |
| popPK | Gendrot_2021 | irrelevant | 0 | 0 | The study is an in vitro antiviral evaluation of methylene blue against SARS-CoV-2, where pyronaridine is used only as a comparator drug in combination assays, with no population PK parameters reported for pyronaridine. |
| popPK | Gupta_2002 | irrelevant | 0 | 0 | The paper is an in vitro study of drug interactions (antimalarial efficacy) and contains no pharmacokinetic parameters or population PK modeling. |
| popPK | Lane_2019 | relevant | 8 | 2 | The paper describes a pharmacokinetic study of pyronaridine in mice and reports parameter types (CL, V, t1/2, AUC) in the text, but the specific numeric values are contained in Table 2 or Supplementary Material which are not included in the provided evidence. |
| popPK | Tan_2009 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for artesunate (AS) and its metabolite dihydroartemisinin (DHA), while pyronaridine (PYR) is only mentioned as a co-administered comparator agent for drug interaction assessment, with no PK parameters reported for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:28 UTC</sub>
