<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;proguanil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Proguanil_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/Proguanil_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# proguanil

- **generic name:** proguanil
- **ATC codes:** `P01BB01`, `P01BB51`, `P01BB52`
- **DrugBank:** [DB01131](https://go.drugbank.com/drugs/DB01131) · **PubChem:** [CID 4923](https://pubchem.ncbi.nlm.nih.gov/compound/4923)
- **molar mass:** 253.731 g/mol (C11H16ClN5) — DrugBank
- **groups:** approved

## About

Proguanil is an antimalarial drug used to treat and prevent malaria, especially falciparum malaria. It is widely used, often combined with other antimalarials, and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420607](https://www.wikidata.org/wiki/Q420607) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| proguanil | parent | 253.731 | C11H16ClN5 | DrugBank | [4923](https://pubchem.ncbi.nlm.nih.gov/compound/4923) | Hussein_1996, Khwarg_2024, McGready_2003 |
| chlorcycloguanil | metabolite | — (mass units only) | — | — | — | — |
| cycloguanil | metabolite | 251.718 | C11H14ClN5 | PubChem | [9049](https://pubchem.ncbi.nlm.nih.gov/compound/9049) | Khwarg_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:03 | 4:06 | 1/4/3 | 2/0/0 | 0/0/0 | 122,191/10,460 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Cherkaoui-Rbati_2023_reference](drugs/drug_proguanil/Proguanil_CherkaouiRbati2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Cherkaoui-Rbati MH et al., A pharmacokinetic-pharmacodynamic model…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12875](https://doi.org/10.1002/psp4.12875) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Khwarg_2024_cc](drugs/drug_proguanil/Proguanil_Khwarg2024_cc.md) | — | parent + metabolite (no model) | 6 | Khwarg J et al., Effect of SLC22A1 polymorphism on the p…, Clinical and translational… (2024) | [10.1111/cts.70103](https://doi.org/10.1111/cts.70103) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Khwarg_2024_ct](drugs/drug_proguanil/Proguanil_Khwarg2024_ct.md) | — | parent + metabolite (no model) | 6 | Khwarg J et al., Effect of SLC22A1 polymorphism on the p…, Clinical and translational… (2024) | [10.1111/cts.70103](https://doi.org/10.1111/cts.70103) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [McGready_2003_reference](drugs/drug_proguanil/Proguanil_McGready2003_reference.md) | — | parent + metabolite (no model) | 4 | McGready R et al., The pharmacokinetics of atovaquone and…, European journal of clinica… (2003) | [10.1007/s00228-003-0652-9](https://doi.org/10.1007/s00228-003-0652-9) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hussein_1996_reference](drugs/drug_proguanil/Proguanil_Hussein1996_reference.md) | — | 1-compartment (no model) | 5 | Hussein Z et al., Population pharmacokinetics of proguani…, British journal of clinical… (1996) | [10.1111/j.1365-2125.1996.tb00114.x](https://doi.org/10.1111/j.1365-2125.1996.tb00114.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Khwarg_2024_final_model](drugs/drug_proguanil/Proguanil_Khwarg2024_final_model.md) | — | parent + metabolite (no model) | 9 | Khwarg J et al., Effect of SLC22A1 polymorphism on the p…, Clinical and translational… (2024) | [10.1111/cts.70103](https://doi.org/10.1111/cts.70103) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Na-Bangchang_2005_reference](drugs/drug_proguanil/Proguanil_NaBangchang2005_reference.md) | — | parent + metabolite (no model) | 0 | Na-Bangchang K et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2005) | [10.1007/s00228-005-0969-7](https://doi.org/10.1007/s00228-005-0969-7) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Watkins_1987_reference](drugs/drug_proguanil/Proguanil_Watkins1987_reference.md) | — | general linear (no model) | 0 | Watkins WM et al., A preliminary pharmacokinetic study of…, The Journal of pharmacy and… (1987) | [10.1111/j.2042-7158.1987.tb06263.x](https://doi.org/10.1111/j.2042-7158.1987.tb06263.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lochner_2014_5_HT3_receptor_response](drugs/drug_proguanil/pd_Lochner_2014_5_HT3_receptor_response.md) | 5-HT3 receptor response (electrophysiological current, human 5-HT3A receptors expressed in Xenopus oocytes) ← proguanil · inhibition effect | — | Lochner M et al., The antimalarial drug proguanil is an a…, The Journal of pharmacology… (2014) | [10.1124/jpet.114.218461](https://doi.org/10.1124/jpet.114.218461) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Thapar_2003_Plasmodium_falciparum_growth_inhibition_proguanil_alone](drugs/drug_proguanil/pd_Thapar_2003_Plasmodium_falciparum_growth_inhibition_proguani.md) | Plasmodium falciparum growth inhibition (proguanil alone) ← proguanil · direct log-linear effect | — | Thapar MM et al., Pharmacodynamic interactions among atov…, Transactions of the Royal S… (2003) | [10.1016/s0035-9203(03)90162-3](https://doi.org/10.1016/s0035-9203(03)90162-3) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=proguanil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PDF (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 8  ·  extracted 1  ·  needs_review 3  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hussein_1996.pdf` | Hussein Z et al., Population pharmacokinetics of proguani…, British journal of clinical… (1996) | popPK | 10 | [10.1111/j.1365-2125.1996.tb00114.x](https://doi.org/10.1111/j.1365-2125.1996.tb00114.x) | [8951190](https://pubmed.ncbi.nlm.nih.gov/8951190) | Population PK (NONMEM) of proguanil with numeric CL and V/F estimates reported directly in the abstract. |
| `McGready_2003.pdf` | McGready R et al., The pharmacokinetics of atovaquone and…, European journal of clinica… (2003) | popPK | 10 | [10.1007/s00228-003-0652-9](https://doi.org/10.1007/s00228-003-0652-9) | [12955371](https://pubmed.ncbi.nlm.nih.gov/12955371) | Population PK parameters (Cl/F, Vd/F, half-life) for proguanil are reported directly in the abstract. |
| `Na-Bangchang_2005.pdf` | Na-Bangchang K et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2005) | popPK | 10 | [10.1007/s00228-005-0969-7](https://doi.org/10.1007/s00228-005-0969-7) | [16041597](https://pubmed.ncbi.nlm.nih.gov/16041597) | Population/compartmental PK of proguanil with numeric V/F, CL/F, and t1/2β values reported directly in the abstract. |
| `Cella_2012.pdf` | Cella M et al., Dosing rationale for fixed-dose combina…, Clinical pharmacology and t… (2012) | popPK | 8 | [10.1038/clpt.2011.297](https://doi.org/10.1038/clpt.2011.297) | [22398964](https://pubmed.ncbi.nlm.nih.gov/22398964) | Population PK models for proguanil were developed in adults and children, but no numeric parameter values appear in the evidence (likely in tables/supplement not provided). |
| `Watkins_1987.pdf` | Watkins WM et al., A preliminary pharmacokinetic study of…, The Journal of pharmacy and… (1987) | popPK | 8 | [10.1111/j.2042-7158.1987.tb06263.x](https://doi.org/10.1111/j.2042-7158.1987.tb06263.x) | [2884288](https://pubmed.ncbi.nlm.nih.gov/2884288) | PK of cycloguanil (proguanil's active metabolite) after proguanil dosing in human subjects, with numeric rate constants (0.0624 h⁻¹, 0.2398 h⁻¹) present in the abstract; limited detail since full parameters may be in the paper body. |

<sub>queue written 2026-10-07T07:59:49.816544+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cella_2012 | relevant | 8 | 2 | Population PK models for proguanil were developed in adults and children, but no numeric parameter values appear in the evidence (likely in tables/supplement not provided). |
| popPK | Cherkaoui-Rbati_2023 | irrelevant | 0 | 0 | The paper models DSM265 PK/PD; proguanil is only mentioned as part of atovaquone–proguanil prophylaxis, with no proguanil parameters. |
| popPK | Dipanjan_2017 | irrelevant | 0 | 0 | A narrative review with no numeric PK parameters for proguanil; only mentions population pharmacokinetics conceptually. |
| popPK | Hussein_1997 | irrelevant | 0 | 0 | This is a population PK study of atovaquone; proguanil is only mentioned as a co-administered drug with no PK parameters for proguanil itself. |
| popPK | Lochner_2014 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study (5-HT3 antagonism) with no PK disposition parameters for proguanil. |
| popPK | Lütgendorf_2006 | irrelevant | 0 | 0 | In-vitro pharmacodynamic drug-interaction study of antimalarials; no PK parameters for proguanil are reported. |
| popPK | McGready_2006 | irrelevant | 0 | 0 | The study reports PK parameters for dihydroartemisinin/artesunate, not proguanil, which is only a co-administered drug. |
| popPK | Thapar_2003 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of antimalarial interactions; no PK disposition parameters for proguanil. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:00 UTC</sub>
