<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Lumefantrine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lumefantrine_Kloprogge2018_reference&quot;,&quot;label&quot;:&quot;Kloprogge_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Lumefantrine

- **generic name:** Lumefantrine
- **ATC codes:** `P01BF01`
- **DrugBank:** [DB06708](https://go.drugbank.com/drugs/DB06708) · **PubChem:** [CID 6437380](https://pubchem.ncbi.nlm.nih.gov/compound/6437380)
- **molar mass:** 528.94 g/mol (C30H32Cl3NO) — DrugBank
- **groups:** approved, investigational

## About

Lumefantrine is an antimalarial drug used to treat malaria, typically in combination with artemisinin derivatives. It is an approved medicine and is widely used in antimalarial combination therapy around the world.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q904464](https://www.wikidata.org/wiki/Q904464) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lumefantrine | parent | 528.94 | C30H32Cl3NO | DrugBank | [6437380](https://pubchem.ncbi.nlm.nih.gov/compound/6437380) | Ding_2026, Ezzet_2000, Francis_2020, Hoglund_2015, Kloprogge_2018 |
| artemether | metabolite | 298.379 | C16H26O5 | PubChem | [68911](https://pubchem.ncbi.nlm.nih.gov/compound/68911) | Ezzet_1998 |
| desbutyllumefantrine (desbutyl-lumefantrine) | metabolite | 472.834 | C26H24Cl3NO | PubChem | [9934522](https://pubchem.ncbi.nlm.nih.gov/compound/9934522) | Ding_2026, Hoglund_2015, Kloprogge_2018 |
| desethylamodiaquine | metabolite | — (mass units only) | — | — | — | — |
| dihydroartemisinin | metabolite | 284.352 | C15H24O5 | PubChem | [107770](https://pubchem.ncbi.nlm.nih.gov/compound/107770) | Ezzet_1998 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:16 | 6:14 | 2/4/0 | 4/1/2 | 0/0/0 | 280,771/24,056 | ollama / glm-5.3-flash | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ding_2026_reference](drugs/drug_lumefantrine/Lumefantrine_Ding2026_reference.md) | model (no simulator) | 2-compartment general linear | 25 | Ding J et al., Population pharmacokinetics of artemeth…, British journal of clinical… (2026) | [10.1002/bcp.70301](https://doi.org/10.1002/bcp.70301) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kloprogge_2018_reference](drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 10 | Kloprogge F et al., Artemether-lumefantrine dosing for mala…, PLoS medicine (2018) | [10.1371/journal.pmed.1002579](https://doi.org/10.1371/journal.pmed.1002579) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Ezzet_1998_reference](drugs/drug_lumefantrine/Lumefantrine_Ezzet1998_reference.md) | — | parent + metabolite (no model) | 4 | Ezzet F et al., Population pharmacokinetics and therape…, British journal of clinical… (1998) | [10.1046/j.1365-2125.1998.00830.x](https://doi.org/10.1046/j.1365-2125.1998.00830.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Ezzet_2000_reference](drugs/drug_lumefantrine/Lumefantrine_Ezzet2000_reference.md) | — | 1-compartment (no model) | 3 | Ezzet F et al., Pharmacokinetics and pharmacodynamics o…, Antimicrobial agents and ch… (2000) | [10.1128/AAC.44.3.697-704.2000](https://doi.org/10.1128/AAC.44.3.697-704.2000) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Francis_2020_reference](drugs/drug_lumefantrine/Lumefantrine_Francis2020_reference.md) | — | 2-compartment (no model) | 11 (+2 cov.) | Francis J et al., An Individual Participant Data Populati…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.02394-19](https://doi.org/10.1128/AAC.02394-19) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Hoglund_2015_reference](drugs/drug_lumefantrine/Lumefantrine_Hoglund2015_reference.md) | — | general linear (no model) | 4 | Hoglund RM et al., Artemether-lumefantrine co-administrati…, British journal of clinical… (2015) | [10.1111/bcp.12529](https://doi.org/10.1111/bcp.12529) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cao_2020_EC50](drugs/drug_lumefantrine/pd_Cao_2020_EC50.md) | Anti-SARS-CoV-2 activity (EC50) ← lumefantrine · inhibition effect | — | Cao R et al., Anti-SARS-CoV-2 Potential of Artemisini…, ACS infectious diseases (2020) | [10.1021/acsinfecdis.0c00522](https://doi.org/10.1021/acsinfecdis.0c00522) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kyavar_2006_Growth_inhibition_of_Plasmodium_vivax](drugs/drug_lumefantrine/pd_Kyavar_2006_Growth_inhibition_of_Plasmodium_vivax.md) | Growth inhibition of Plasmodium vivax ← desbutyl-benflumetol (DBB) · inhibition effect | — | Kyavar L et al., In vitro interaction between artemisini…, Wiener klinische Wochenschr… (2006) | [10.1007/s00508-006-0677-z](https://doi.org/10.1007/s00508-006-0677-z) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pirker-Krassnig_2004_inhibition_of_Plasmodium_vivax_parasite_growth](drugs/drug_lumefantrine/pd_Pirker_Krassnig_2004_inhibition_of_Plasmodium_vivax_parasite.md) | inhibition of Plasmodium vivax parasite growth ← lumefantrine · direct log-linear effect | — | Pirker-Krassnig DK et al., Comparative study on the in vitro activ…, Wiener klinische Wochenschr… (2004) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Starzengruber_2007_inhibition_of_schizont_maturation_Plasmodium_falciparum](drugs/drug_lumefantrine/pd_Starzengruber_2007_inhibition_of_schizont_maturation_Plasmod.md) | inhibition of schizont maturation (Plasmodium falciparum) ← lumefantrine · inhibition effect | — | Starzengruber P et al., Specific pharmacokinetic interaction be…, Wiener klinische Wochenschr… (2007) | [10.1007/s00508-007-0861-9](https://doi.org/10.1007/s00508-007-0861-9) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kloprogge_2018_recrudescence](drugs/drug_lumefantrine/pd_Kloprogge_2018_recrudescence.md) | PCR-corrected recrudescent infection (cure) at day 42 ← lumefantrine · time-to-event model | — | Kloprogge F et al., Artemether-lumefantrine dosing for mala…, PLoS medicine (2018) | [10.1371/journal.pmed.1002579](https://doi.org/10.1371/journal.pmed.1002579) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kloprogge_2018_recrudescence_2](drugs/drug_lumefantrine/pd_Kloprogge_2018_recrudescence_2.md) | PCR-corrected recrudescent infection (cure) at day 42 — African children &lt;15 kg ← lumefantrine · time-to-event model | — | Kloprogge F et al., Artemether-lumefantrine dosing for mala…, PLoS medicine (2018) | [10.1371/journal.pmed.1002579](https://doi.org/10.1371/journal.pmed.1002579) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kloprogge_2018_recrudescence_3](drugs/drug_lumefantrine/pd_Kloprogge_2018_recrudescence_3.md) | PCR-corrected recrudescent infection (cure) at day 42 — African children 15–25 kg ← lumefantrine · time-to-event model | — | Kloprogge F et al., Artemether-lumefantrine dosing for mala…, PLoS medicine (2018) | [10.1371/journal.pmed.1002579](https://doi.org/10.1371/journal.pmed.1002579) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kloprogge_2018_recrudescence_4](drugs/drug_lumefantrine/pd_Kloprogge_2018_recrudescence_4.md) | PCR-corrected recrudescent infection (cure) at day 42 — Southeast Asian pregnant women ← lumefantrine · time-to-event model | — | Kloprogge F et al., Artemether-lumefantrine dosing for mala…, PLoS medicine (2018) | [10.1371/journal.pmed.1002579](https://doi.org/10.1371/journal.pmed.1002579) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Simeon_2024_malaria_reinfection_free_survival_remaining_malaria_free_for_42_days](drugs/drug_lumefantrine/pd_Simeon_2024_malaria_reinfection_free_survival_remaining_mala.md) | malaria reinfection-free survival (remaining malaria free for 42 days) ← lumefantrine · time-to-event model | — | Simeon S et al., Optimizing Lumefantrine Dosing for Youn…, Open forum infectious disea… (2024) | [10.1093/ofid/ofae627](https://doi.org/10.1093/ofid/ofae627) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wernsdorfer_1998_inhibition_of_schizont_maturation](drugs/drug_lumefantrine/pd_Wernsdorfer_1998_inhibition_of_schizont_maturation.md) | inhibition of schizont maturation ← benflumetol · inhibition effect | — | Wernsdorfer WH et al., Activity of benflumetol and its enantio…, Acta tropica (1998) | [10.1016/s0001-706x(97)00141-1](https://doi.org/10.1016/s0001-706x(97)00141-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lumefantrine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ATP1A1 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 74 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 6  ·  extracted 2  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Akinrinade_2026.pdf` | Akinrinade TO et al., Population pharmacokinetics of lumefant…, European journal of clinica… (2026) | popPK | 10 | [10.1007/s00228-026-04090-y](https://doi.org/10.1007/s00228-026-04090-y) | [42234159](https://pubmed.ncbi.nlm.nih.gov/42234159) | A population PK study of lumefantrine in humans, but the abstract gives no numeric parameter values (CL, V, ka likely in tables/supplementary not provided). |
| `Ezzet_1998.pdf` | Ezzet F et al., Population pharmacokinetics and therape…, British journal of clinical… (1998) | popPK | 9 | [10.1046/j.1365-2125.1998.00830.x](https://doi.org/10.1046/j.1365-2125.1998.00830.x) | [9862244](https://pubmed.ncbi.nlm.nih.gov/9862244) | Population PK of benflumetol (lumefantrine) in malaria patients with numeric absorption and elimination half-lives reported in the abstract, though CL/V and full model parameters are not shown here. |
| `Ezzet_2000.pdf` | Ezzet F et al., Pharmacokinetics and pharmacodynamics o…, Antimicrobial agents and ch… (2000) | popPK | 8 | [10.1128/AAC.44.3.697-704.2000](https://doi.org/10.1128/AAC.44.3.697-704.2000) | [10681341](https://pubmed.ncbi.nlm.nih.gov/10681341) | Population PK of lumefantrine in humans with absorption half-life (4.5 h) and bioavailability reported, but CL/V and full parameter values likely in the model/supplementary text not shown. |
| `Sugiarto_2022.pdf` | Sugiarto SR et al., The pharmacokinetic properties of artem…, British journal of clinical… (2022) | popPK | 8 | [10.1111/bcp.15001](https://doi.org/10.1111/bcp.15001) | [34296469](https://pubmed.ncbi.nlm.nih.gov/34296469) | Human population-PK study of lumefantrine with compartmental models, but detailed parameter values (CL, V) appear only in the full paper/supplementary material, not in this abstract evidence. |
| `Borrmann_2010.pdf` | Borrmann S et al., The effect of food consumption on lumef…, Tropical medicine & interna… (2010) | popPK | 7 | [10.1111/j.1365-3156.2010.02477.x](https://doi.org/10.1111/j.1365-3156.2010.02477.x) | [20180933](https://pubmed.ncbi.nlm.nih.gov/20180933) | Population PK model of lumefantrine in children is described, but numeric disposition parameters (CL, V, ka) are not shown in the evidence, likely in supplementary material. |

<sub>queue written 2026-10-07T07:10:49.976629+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akinrinade_2026 | relevant | 10 | 2 | A population PK study of lumefantrine in humans, but the abstract gives no numeric parameter values (CL, V, ka likely in tables/supplementary not provided). |
| popPK | Borrmann_2010 | relevant | 7 | 4 | Population PK model of lumefantrine in children is described, but numeric disposition parameters (CL, V, ka) are not shown in the evidence, likely in supplementary material. |
| popPK | Cao_2020 | irrelevant | 2 | 1 | In-vitro antiviral study of artemisinins; lumefantrine is only a tested compound with EC50 values, and PK "prediction model" values are not reported in the evidence. |
| popPK | Kawuma_2021 | irrelevant | 2 | 1 | The population PK model and all numeric parameters (CL, V, ka) are for dolutegravir; lumefantrine is only a co-administered antimalarial with no lumefantrine PK parameters reported. |
| popPK | Kyavar_2006 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic drug-interaction study in Plasmodium vivax isolates; no pharmacokinetic disposition parameters for lumefantrine are reported (desbutyl-benflumetol EC values are potency, not PK). |
| popPK | Müller_2008 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of benflumetol metabolite and artemisinin in P. falciparum; no lumefantrine PK parameters. |
| popPK | Noedl_2001 | irrelevant | 0 | 0 | In vitro antimalarial susceptibility study of a lumefantrine metabolite; no PK disposition parameters reported. |
| popPK | Pirker-Krassnig_2004 | irrelevant | 0 | 0 | In-vitro antiparasitic susceptibility study with EC50/EC90 values, not a PK study reporting disposition parameters for lumefantrine. |
| popPK | Samal_2005 | irrelevant | 0 | 0 | In vitro antimalarial efficacy study of desbutyl-benflumetol and retinol; no lumefantrine PK parameters reported. |
| popPK | Simeon_2024 | relevant | 7 | 2 | A population PK-PD simulation study of lumefantrine in young children using a published 2-compartment model, but the actual numeric PK parameter values (CL, V, ka, IIV) are not shown in the evidence — they reside in the cited Chotsiri et al. publication/supplementary material. |
| popPK | Starzengruber_2007 | irrelevant | 0 | 0 | In-vitro pharmacodynamic interaction study in P. falciparum isolates; no PK disposition parameters for lumefantrine. |
| popPK | Sugiarto_2022 | relevant | 8 | 4 | Human population-PK study of lumefantrine with compartmental models, but detailed parameter values (CL, V) appear only in the full paper/supplementary material, not in this abstract evidence. |
| popPK | Wernsdorfer_1998 | irrelevant | 0 | 0 | In-vitro antimalarial activity study (EC50 values), no pharmacokinetic disposition parameters for lumefantrine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:11 UTC</sub>
