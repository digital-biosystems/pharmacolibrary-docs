<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;crizotinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Crizotinib_Gibson2021_reference&quot;,&quot;label&quot;:&quot;Gibson_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_crizotinib/Crizotinib_Gibson2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Crizotinib_Gupta2021_reference&quot;,&quot;label&quot;:&quot;Gupta_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_crizotinib/Crizotinib_Gupta2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# crizotinib

- **generic name:** crizotinib
- **ATC codes:** `L01ED01`
- **DrugBank:** [DB08865](https://go.drugbank.com/drugs/DB08865) · **PubChem:** [CID 11626560](https://pubchem.ncbi.nlm.nih.gov/compound/11626560)
- **molar mass:** 450.337 g/mol (C21H22Cl2FN5O) — DrugBank
- **groups:** approved, investigational

## About

Crizotinib is an ALK inhibitor anticancer drug used to treat non-small-cell lung carcinoma and other tumours such as inflammatory myofibroblastic tumour. It is authorised in the European Union and is an approved medicine, used mainly in oncology care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5186964](https://www.wikidata.org/wiki/Q5186964) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| crizotinib | parent | 450.337 | C21H22Cl2FN5O | DrugBank | [11626560](https://pubchem.ncbi.nlm.nih.gov/compound/11626560) | Gibson_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:13 | 11:42 | 1/0/1 | 4/0/1 | 0/0/0 | 308,807/71,065 | openai / gpt-6-luna | 10 | 0/10 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.444). Primary extraction retained.">cross-check: partial</span> | [Gibson_2021_reference](drugs/drug_crizotinib/Crizotinib_Gibson2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Gibson EG et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-021-04357-4](https://doi.org/10.1007/s00280-021-04357-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Gupta_2021_reference](drugs/drug_crizotinib/Crizotinib_Gupta2021_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Gupta N et al., Population Pharmacokinetics of Brigatin…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00929-4](https://doi.org/10.1007/s40262-020-00929-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Mao_2013_CYP3A4_mRNA](drugs/drug_crizotinib/pd_Mao_2013_CYP3A4_mRNA.md) | CYP3A4 induction (measured as mRNA expression) ← crizotinib · direct Emax (saturable) effect | — | Mao J et al., Prediction of crizotinib-midazolam inte…, Drug metabolism and disposi… (2013) | [10.1124/dmd.112.049114](https://doi.org/10.1124/dmd.112.049114) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Mao_2013_CYP3A_TDI](drugs/drug_crizotinib/pd_Mao_2013_CYP3A_TDI.md) | CYP3A time-dependent inhibition ← crizotinib · inhibition effect | — | Mao J et al., Prediction of crizotinib-midazolam inte…, Drug metabolism and disposi… (2013) | [10.1124/dmd.112.049114](https://doi.org/10.1124/dmd.112.049114) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.857). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wanika_2024_Tumor_cell_viability](drugs/drug_crizotinib/pd_Wanika_2024_Tumor_cell_viability.md) | Tumor cell viability ← crizotinib · indirect response — drug inhibits the production of Tumor cell viability | — | Wanika L et al., In vitro PK/PD modeling of tyrosine kin…, Clinical and translational… (2024) | [10.1111/cts.13714](https://doi.org/10.1111/cts.13714) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Yamazaki_2012_ALK](drugs/drug_crizotinib/pd_Yamazaki_2012_ALK.md) | ALK inhibition in H3122 ← crizotinib · inhibition effect | — | Yamazaki S et al., Pharmacokinetic/pharmacodynamic modelin…, The Journal of pharmacology… (2012) | [10.1124/jpet.111.188870](https://doi.org/10.1124/jpet.111.188870) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Yamazaki_2012_ALK_2](drugs/drug_crizotinib/pd_Yamazaki_2012_ALK_2.md) | ALK inhibition in Karpas299 ← crizotinib · inhibition effect | — | Yamazaki S et al., Pharmacokinetic/pharmacodynamic modelin…, The Journal of pharmacology… (2012) | [10.1124/jpet.111.188870](https://doi.org/10.1124/jpet.111.188870) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Yamazaki_2012_tumor_growth_in_H3122](drugs/drug_crizotinib/pd_Yamazaki_2012_tumor_growth_in_H3122.md) | tumor growth in H3122 ← crizotinib · inhibition effect | — | Yamazaki S et al., Pharmacokinetic/pharmacodynamic modelin…, The Journal of pharmacology… (2012) | [10.1124/jpet.111.188870](https://doi.org/10.1124/jpet.111.188870) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Yamazaki_2012_tumor_growth_in_Karpas299](drugs/drug_crizotinib/pd_Yamazaki_2012_tumor_growth_in_Karpas299.md) | tumor growth in Karpas299 ← crizotinib · inhibition effect | — | Yamazaki S et al., Pharmacokinetic/pharmacodynamic modelin…, The Journal of pharmacology… (2012) | [10.1124/jpet.111.188870](https://doi.org/10.1124/jpet.111.188870) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Yamazaki_2013_ALK](drugs/drug_crizotinib/pd_Yamazaki_2013_ALK.md) | ALK inhibition ← crizotinib · inhibition effect | — | Yamazaki S, Translational pharmacokinetic-pharmacod…, The AAPS journal (2013) | [10.1208/s12248-012-9436-4](https://doi.org/10.1208/s12248-012-9436-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Yamazaki_2013_MET](drugs/drug_crizotinib/pd_Yamazaki_2013_MET.md) | MET inhibition ← crizotinib · inhibition effect | — | Yamazaki S, Translational pharmacokinetic-pharmacod…, The AAPS journal (2013) | [10.1208/s12248-012-9436-4](https://doi.org/10.1208/s12248-012-9436-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Yamazaki_2013_TGI](drugs/drug_crizotinib/pd_Yamazaki_2013_TGI.md) | tumor growth inhibition ← crizotinib · inhibition effect | — | Yamazaki S, Translational pharmacokinetic-pharmacod…, The AAPS journal (2013) | [10.1208/s12248-012-9436-4](https://doi.org/10.1208/s12248-012-9436-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Groenland_2021_PFS](drugs/drug_crizotinib/pd_Groenland_2021_PFS.md) | progression-free survival ← crizotinib · time-to-event model | — | Groenland SL et al., Exposure-Response Analyses of Anaplasti…, Clinical pharmacology and t… (2021) | [10.1002/cpt.1989](https://doi.org/10.1002/cpt.1989) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gibson_2021.pdf` | Gibson EG et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2021) | popPK | 10 | [10.1007/s00280-021-04357-4](https://doi.org/10.1007/s00280-021-04357-4) | [34586478](https://pubmed.ncbi.nlm.nih.gov/34586478) | The pediatric human population-PK model reports numeric crizotinib clearance and volume values. |
| `Jerry_2024.pdf` | Jerry L et al., Population modeling analyses of crizoti…, Pediatric blood & cancer (2024) | popPK | 10 | [10.1002/pbc.31139](https://doi.org/10.1002/pbc.31139) | [38867367](https://pubmed.ncbi.nlm.nih.gov/38867367) | A pediatric crizotinib population-PK model is reported, but no numeric disposition parameter values are provided. |
| `Xu_2015.pdf` | Xu H et al., The effects of ketoconazole and rifampi…, European journal of clinica… (2015) | popPK | 8 | [10.1007/s00228-015-1945-5](https://doi.org/10.1007/s00228-015-1945-5) | [26381275](https://pubmed.ncbi.nlm.nih.gov/26381275) | Human crizotinib PK is studied, but only AUC changes are quantified; disposition parameter values are not provided. |
| `Yamazaki_2012.pdf` | Yamazaki S et al., Pharmacokinetic/pharmacodynamic modelin…, The Journal of pharmacology… (2012) | popPK | 8 | [10.1124/jpet.111.188870](https://doi.org/10.1124/jpet.111.188870) | [22129595](https://pubmed.ncbi.nlm.nih.gov/22129595) | Crizotinib PK is described by a one-compartment model, but no numeric PK parameter values are provided. |
| `Yamazaki_2013.pdf` | Yamazaki S, Translational pharmacokinetic-pharmacod…, The AAPS journal (2013) | popPK | 8 | [10.1208/s12248-012-9436-4](https://doi.org/10.1208/s12248-012-9436-4) | [23250669](https://pubmed.ncbi.nlm.nih.gov/23250669) | The paper models crizotinib PKPD, but no numeric disposition parameters are present in the evidence. |

<sub>queue written 2026-10-06T23:02:54.101237+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Groenland_2021 | irrelevant | 2 | 2 | This human exposure–response study reports Cmin values, not crizotinib disposition parameters; the 42-hour half-life is cited rather than estimated. |
| popPK | Gupta_2020 | irrelevant | 0 | 0 | The quantitative PK and exposure–response analyses concern brigatinib; crizotinib is only mentioned as prior therapy or a comparator. |
| popPK | Gupta_2021 | irrelevant | 0 | 0 | This is a quantitative population-PK study of brigatinib, not crizotinib; no crizotinib parameter values are reported. |
| popPK | Gupta_2021_2 | irrelevant | 0 | 0 | The study reports quantitative pharmacokinetics for brigatinib, not crizotinib. |
| popPK | Gupta_2022 | irrelevant | 0 | 0 | Crizotinib is only a comparator; the reported PK model and numeric parameters are for brigatinib. |
| popPK | Gupta_2023 | irrelevant | 0 | 0 | This review reports brigatinib pharmacokinetics; crizotinib is only discussed as a comparator, with no crizotinib disposition parameters. |
| popPK | Jerry_2024 | relevant | 10 | 0 | A pediatric crizotinib population-PK model is reported, but no numeric disposition parameter values are provided. |
| popPK | Mao_2013 | irrelevant | 2 | 0 | The study reports in vitro CYP3A inhibition and predicted AUCs, but no quantitative crizotinib disposition parameters. |
| popPK | Morcos_2018 | irrelevant | 0 | 0 | This is an alectinib exposure–response study; crizotinib is only prior treatment, with no crizotinib PK parameters reported. |
| popPK | Sato_2018 | irrelevant | 1 | 0 | This is an in vitro transporter study and reports no quantitative crizotinib disposition parameters. |
| popPK | Wanika_2024 | irrelevant | 2 | 3 | This is an in vitro cell-line model, and only a few parameter values are readable while the full estimates are in an unprovided table. |
| popPK | Xu_2015 | relevant | 8 | 2 | Human crizotinib PK is studied, but only AUC changes are quantified; disposition parameter values are not provided. |
| popPK | Yamazaki_2012 | relevant | 8 | 1 | Crizotinib PK is described by a one-compartment model, but no numeric PK parameter values are provided. |
| popPK | Yamazaki_2013 | relevant | 8 | 0 | The paper models crizotinib PKPD, but no numeric disposition parameters are present in the evidence. |
| popPK | Yamazaki_2015 | irrelevant | 0 | 0 | The study models other ALK inhibitors in mice; crizotinib is only mentioned as a comparator and has no reported PK values. |
| popPK | Yang_2021 | irrelevant | 2 | 8 | Crizotinib is only a benchmark; readable label-based values for its volume and half-life appear, but the PK model is for TQ-B3101. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The PopPK parameters are for iruplinalkib, while crizotinib is only mentioned as prior therapy and a covariate. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:03 UTC</sub>
