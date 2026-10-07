<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artemether&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artemether_Lohy2018_reference&quot;,&quot;label&quot;:&quot;Lohy_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemether/Artemether_Lohy2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# artemether

- **generic name:** artemether
- **ATC codes:** `P01BE02`, `P01BF01`
- **DrugBank:** [DB06697](https://go.drugbank.com/drugs/DB06697) · **PubChem:** [CID 68911](https://pubchem.ncbi.nlm.nih.gov/compound/68911)
- **molar mass:** 298.3746 g/mol (C16H26O5) — DrugBank
- **groups:** approved, investigational

## About

Artemether is an antimalarial medicine of the artemisinin group, used to treat malaria, and is also reported to have activity against other protozoa and schistosomiasis. It is an approved medicine, appears on the WHO essential medicines list, and is used both alone and in combination antimalarial products worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416199](https://www.wikidata.org/wiki/Q416199) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| artemether | parent | 298.375 | C16H26O5 | DrugBank | [68911](https://pubchem.ncbi.nlm.nih.gov/compound/68911) | Ding_2026, Hoglund_2015, Lohy_2018, Zaloumis_2012 |
| artesunate | metabolite | 384.425 | C19H28O8 | PubChem | [6917864](https://pubchem.ncbi.nlm.nih.gov/compound/6917864) | Zaloumis_2012 |
| desbutyl-lumefantrine | metabolite | 472.834 | C26H24Cl3NO | PubChem | [9934522](https://pubchem.ncbi.nlm.nih.gov/compound/9934522) | Hoglund_2015 |
| desbutyllumefantrine | metabolite | — (mass units only) | — | — | — | — |
| desethylamodiaquine | metabolite | — (mass units only) | — | — | — | — |
| dihydroartemisinin | metabolite | 284.352 | C15H24O5 | PubChem | [107770](https://pubchem.ncbi.nlm.nih.gov/compound/107770) | Ding_2026, Hoglund_2015, Lohy_2018, Zaloumis_2012 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:58 | 7:03 | 2/2/0 | 4/0/1 | 0/0/0 | 390,136/29,015 | ollama / glm-5.3-flash | 11 | 0/11 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Lohy_2018_reference](drugs/drug_artemether/Artemether_Lohy2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 12 | Lohy Das J et al., Population Pharmacokinetics of Artemeth…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.00518-18](https://doi.org/10.1128/AAC.00518-18) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zaloumis_2012_reference](drugs/drug_artemether/Artemether_Zaloumis2012_reference.md) | held back | 1-compartment, oral | 5 | Zaloumis S et al., Assessing the utility of an anti-malari…, Malaria journal (2012) | [10.1186/1475-2875-11-303](https://doi.org/10.1186/1475-2875-11-303) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Ding_2026_reference](drugs/drug_artemether/Artemether_Ding2026_reference.md) | — | general linear (no model) | 26 | Ding J et al., Population pharmacokinetics of artemeth…, British journal of clinical… (2026) | [10.1002/bcp.70301](https://doi.org/10.1002/bcp.70301) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Hoglund_2015_reference](drugs/drug_artemether/Artemether_Hoglund2015_reference.md) | — | general linear (no model) | 6 | Hoglund RM et al., Artemether-lumefantrine co-administrati…, British journal of clinical… (2015) | [10.1111/bcp.12529](https://doi.org/10.1111/bcp.12529) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hassan_1992_in_vitro_inhibition_of_Plasmodium_falciparum_growth](drugs/drug_artemether/pd_Hassan_1992_in_vitro_inhibition_of_Plasmodium_falciparum_gro.md) | in vitro inhibition of Plasmodium falciparum growth ← artemether · direct sigmoid Emax (Hill) effect | — | Hassan Alin M et al., The effect of artemisinine, its derivat…, Transactions of the Royal S… (1992) | [10.1016/0035-9203(92)90220-7](https://doi.org/10.1016/0035-9203(92)90220-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kay_2013_P](drugs/drug_artemether/pd_Kay_2013_P.md) | parasite number (parasitaemia) killing rate ← artemether / dihydroartemisinin (dominant form) · direct sigmoid Emax (Hill) effect | — | Kay K et al., Improving pharmacokinetic-pharmacodynam…, PLoS computational biology (2013) | [10.1371/journal.pcbi.1003151](https://doi.org/10.1371/journal.pcbi.1003151) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zaloumis_2012_parasite_count_PCT](drugs/drug_artemether/pd_Zaloumis_2012_parasite_count_PCT.md) | Parasite count (within-host P. falciparum parasite-time profile; outputs: proportion clinically cured and parasite clearance time) ← artemether · direct sigmoid Emax (Hill) effect | — | Zaloumis S et al., Assessing the utility of an anti-malari…, Malaria journal (2012) | [10.1186/1475-2875-11-303](https://doi.org/10.1186/1475-2875-11-303) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhou_2021_residual_infectivity](drugs/drug_artemether/pd_Zhou_2021_residual_infectivity.md) | % residual infectivity (SARS-CoV-2 infection of VeroE6 cells, pretreatment assay) ← artemether · direct sigmoid Emax (Hill) effect | — | Zhou Y et al., In vitro efficacy of artemisinin-based…, Scientific reports (2021) | [10.1038/s41598-021-93361-y](https://doi.org/10.1038/s41598-021-93361-y) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhou_2021_residual_infectivity_2](drugs/drug_artemether/pd_Zhou_2021_residual_infectivity_2.md) | % residual infectivity (SARS-CoV-2 infection of VeroE6 cells, treatment assay) ← artemether · direct sigmoid Emax (Hill) effect | — | Zhou Y et al., In vitro efficacy of artemisinin-based…, Scientific reports (2021) | [10.1038/s41598-021-93361-y](https://doi.org/10.1038/s41598-021-93361-y) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhou_2021_residual_infectivity_3](drugs/drug_artemether/pd_Zhou_2021_residual_infectivity_3.md) | % residual infectivity (SARS-CoV-2 infection of Huh7.5 cells, treatment assay) ← artemether · direct sigmoid Emax (Hill) effect | — | Zhou Y et al., In vitro efficacy of artemisinin-based…, Scientific reports (2021) | [10.1038/s41598-021-93361-y](https://doi.org/10.1038/s41598-021-93361-y) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhou_2021_residual_infectivity_4](drugs/drug_artemether/pd_Zhou_2021_residual_infectivity_4.md) | % residual infectivity (SARS-CoV-2 infection of A549-hACE2 cells, treatment assay) ← artemether · direct sigmoid Emax (Hill) effect | — | Zhou Y et al., In vitro efficacy of artemisinin-based…, Scientific reports (2021) | [10.1038/s41598-021-93361-y](https://doi.org/10.1038/s41598-021-93361-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lohy_2018_EFF](drugs/drug_artemether/pd_Lohy_2018_EFF.md) | Autoinduction effect (EFF) of artemether concentration on enzyme (CYP3A4) production rate, modulating ARM clearance ← artemether · direct Emax (saturable) effect | model (no simulator) | Lohy Das J et al., Population Pharmacokinetics of Artemeth…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.00518-18](https://doi.org/10.1128/AAC.00518-18) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=artemether) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer/substrate, `CYP2C19` inducer/substrate, `CYP2C9` substrate, `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ATP1A1 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 74 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 2  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sugiarto_2022.pdf` | Sugiarto SR et al., The pharmacokinetic properties of artem…, British journal of clinical… (2022) | popPK | 8 | [10.1111/bcp.15001](https://doi.org/10.1111/bcp.15001) | [34296469](https://pubmed.ncbi.nlm.nih.gov/34296469) | Human population-PK study of artemether with quantitative parameters (AUC, clearance increase), but detailed parameter values likely in tables/supplement not fully provided here. |
| `Sugiarto_2022_2.pdf` | Sugiarto SR et al., Pharmacokinetic properties of the antim…, International journal of an… (2022) | popPK | 8 | [10.1016/j.ijantimicag.2021.106482](https://doi.org/10.1016/j.ijantimicag.2021.106482) | [34818520](https://pubmed.ncbi.nlm.nih.gov/34818520) | Population PK models of artemether were developed in healthy volunteers, but no numeric parameter values appear in the evidence (likely in tables/supplement not provided). |

<sub>queue written 2026-10-07T05:52:30.028180+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akinrinade_2026 | irrelevant | 2 | 1 | This is a population PK study of lumefantrine (artemether's partner drug), not artemether itself, and no numeric PK parameter values appear in the evidence. |
| popPK | Borrmann_2010 | irrelevant | 2 | 2 | The PK model and reported parameters concern lumefantrine, with artemether only as the co-administered partner drug; no artemether disposition parameters are given. |
| popPK | Costa_2021 | irrelevant | 0 | 0 | This is a virtual screening/drug discovery study; artemether is only mentioned as a comparator with no PK parameters reported. |
| popPK | Francis_2020 | irrelevant | 1 | 0 | This is a population-PK meta-analysis of lumefantrine only; artemether is mentioned as the companion drug but no artemether (or DHA) disposition parameters are reported. |
| popPK | Gendrot_2020 | irrelevant | 0 | 0 | In vitro SARS-CoV-2 study of antimalarials; artemether is only mentioned as a combination partner, with no PK disposition parameters for artemether reported. |
| popPK | Hassan_1992 | irrelevant | 0 | 0 | In vitro antimalarial efficacy study reporting EC50 values, not pharmacokinetic disposition parameters for artemether. |
| popPK | Kawuma_2021 | irrelevant | 2 | 0 | The PK model and all numeric parameters are for dolutegravir; artemether is only a co-administered interaction agent with no artemether disposition parameters reported. |
| popPK | Kay_2013 | relevant | 6 | 2 | A compartmental PK/PD model of artemether (parent and DHA metabolite) is described, but the actual numeric parameter values (absorption, conversion, elimination rates, Vd) are in Table S1/Text S1, which are not included in the evidence. |
| popPK | Kloprogge_2015 | irrelevant | 1 | 0 | This is a population PK study of lumefantrine and its metabolite desbutyl-lumefantrine; artemether is only the co-administered partner drug and no artemether disposition parameters are reported. |
| popPK | Kloprogge_2018 | irrelevant | 1 | 0 | This is a population-PK study of lumefantrine (and desbutyl-lumefantrine), not artemether; artemether is only the co-administered partner drug and no artemether parameters are reported. |
| popPK | Simeon_2024 | irrelevant | 2 | 1 | This is a lumefantrine dosing simulation study; artemether is only mentioned as part of the combination, and no numeric artemether PK parameters are present (LF model parameters live in the cited Chotsiri et al paper). |
| popPK | Sugiarto_2022 | relevant | 8 | 4 | Human population-PK study of artemether with quantitative parameters (AUC, clearance increase), but detailed parameter values likely in tables/supplement not fully provided here. |
| popPK | Sugiarto_2022_2 | relevant | 8 | 3 | Population PK models of artemether were developed in healthy volunteers, but no numeric parameter values appear in the evidence (likely in tables/supplement not provided). |
| popPK | Zhou_2021 | irrelevant | 1 | 1 | In vitro antiviral study; artemether PK values (Cmax) only cited from literature, no disposition parameters measured. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:52 UTC</sub>
