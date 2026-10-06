<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;aclarubicin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aclarubicin_Liu2026_reference&quot;,&quot;label&quot;:&quot;Liu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aclarubicin/Aclarubicin_Liu2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# aclarubicin

- **generic name:** aclarubicin
- **ATC codes:** `L01DB04`
- **DrugBank:** [DB11617](https://go.drugbank.com/drugs/DB11617) · **PubChem:** [CID 451415](https://pubchem.ncbi.nlm.nih.gov/compound/451415)
- **molar mass:** 811.878 g/mol (C42H53NO15) — DrugBank
- **groups:** investigational

## About

Aclarubicin is an anthracycline antibiotic investigated as a cancer treatment, acting as a topoisomerase II inhibitor. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4674302](https://www.wikidata.org/wiki/Q4674302) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| aclarubicin | parent | 811.878 | C42H53NO15 | DrugBank | [451415](https://pubchem.ncbi.nlm.nih.gov/compound/451415) | Geodakian_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:18 | 34:10 | 1/0/1 | 6/1/0 | 0/0/0 | 639,497/88,086 | openai / gpt-6-luna | 21 | 6/7 | 20/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Liu_2026_reference](drugs/drug_aclarubicin/Aclarubicin_Liu2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Liu Z et al., Real-World Pharmacokinetic and Exposure…, Drug design, development an… (2026) | [10.2147/dddt.s563629](https://doi.org/10.2147/dddt.s563629) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Geodakian_1987_reference](drugs/drug_aclarubicin/Aclarubicin_Geodakian1987_reference.md) | — | 1-compartment (no model) | 3 | Geodakian SV et al., [Pharmacokinetic study of aclarubicin.…, Antibiotiki i meditsinskaia… (1987) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gollapudi_2019_frequency_of_micronucleated_cells](drugs/drug_aclarubicin/pd_Gollapudi_2019_frequency_of_micronucleated_cells.md) | frequency of micronucleated cells ← aclarubicin · stimulation effect | — | Gollapudi P et al., Concentration-response studies of the c…, Mutation research. Genetic… (2019) | [10.1016/j.mrgentox.2019.05.006](https://doi.org/10.1016/j.mrgentox.2019.05.006) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rabbit</span> | [Isoe_1992_ubiquitin_ATP_dependent_proteolytic_activity](drugs/drug_aclarubicin/pd_Isoe_1992_ubiquitin_ATP_dependent_proteolytic_activity.md) | ubiquitin-ATP-dependent proteolytic activity ← aclarubicin · inhibition effect | — | Isoe T et al., Inhibition of different steps of the ub…, Biochimica et biophysica ac… (1992) | [10.1016/0304-4165(92)90070-b](https://doi.org/10.1016/0304-4165(92)90070-b) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Marsh_1983_granulocyte_macrophage_colony_forming_cells](drugs/drug_aclarubicin/pd_Marsh_1983_granulocyte_macrophage_colony_forming_cells.md) | granulocyte-macrophage colony-forming cells ← aclacinomycin A · direct log-linear effect | — | Marsh JC et al., Sensitivity of bone marrow hematopoieti…, Cancer research (1983) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rattaprasert_2022_PfDH_B](drugs/drug_aclarubicin/pd_Rattaprasert_2022_PfDH_B.md) | unwinding activity of PfDH-B ← aclarubicin · inhibition effect | — | Rattaprasert P et al., Inhibitory effects of anthracyclines on…, Malaria journal (2022) | [10.1186/s12936-022-04238-y](https://doi.org/10.1186/s12936-022-04238-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Suntornthiticharoen_2006_PfDH_A](drugs/drug_aclarubicin/pd_Suntornthiticharoen_2006_PfDH_A.md) | PfDH A activity ← aclarubicin · inhibition effect | — | Suntornthiticharoen P et al., Purification and characterization of a…, Parasitology 133(Pt 4):389–… (2006) | [10.1017/S0031182006000527](https://doi.org/10.1017/S0031182006000527) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2023_SARS_CoV_2_infection](drugs/drug_aclarubicin/pd_Wang_2023_SARS_CoV_2_infection.md) | SARS-CoV-2 infection ← aclarubicin · inhibition effect | — | Wang Z et al., Anthracyclines inhibit SARS-CoV-2 infec…, Virus research (2023) | [10.1016/j.virusres.2023.199164](https://doi.org/10.1016/j.virusres.2023.199164) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">cattle</span> | [Komiyama_1983_DNA_polymerase_I](drugs/drug_aclarubicin/pd_Komiyama_1983_DNA_polymerase_I.md) | DNA polymerase I ← Aclacinomycin A · inhibition effect | — | Komiyama T et al., Interaction of new anthracycline antibi…, Biochimica et biophysica ac… (1983) | [10.1016/0167-4781(83)90124-0](https://doi.org/10.1016/0167-4781(83)90124-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">cattle</span> | [Komiyama_1983_RNA_polymerase](drugs/drug_aclarubicin/pd_Komiyama_1983_RNA_polymerase.md) | RNA polymerase ← Aclacinomycin A · inhibition effect | — | Komiyama T et al., Interaction of new anthracycline antibi…, Biochimica et biophysica ac… (1983) | [10.1016/0167-4781(83)90124-0](https://doi.org/10.1016/0167-4781(83)90124-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">cattle</span> | [Komiyama_1983_RT](drugs/drug_aclarubicin/pd_Komiyama_1983_RT.md) | Reverse transcriptase ← Aclacinomycin A · inhibition effect | — | Komiyama T et al., Interaction of new anthracycline antibi…, Biochimica et biophysica ac… (1983) | [10.1016/0167-4781(83)90124-0](https://doi.org/10.1016/0167-4781(83)90124-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">cattle</span> | [Komiyama_1983_RT_2](drugs/drug_aclarubicin/pd_Komiyama_1983_RT_2.md) | Reverse transcriptase with poly(rA) x d(pT)10 as template ← aclacinomycin A · inhibition effect | — | Komiyama T et al., Interaction of new anthracycline antibi…, Biochimica et biophysica ac… (1983) | [10.1016/0167-4781(83)90124-0](https://doi.org/10.1016/0167-4781(83)90124-0) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aclarubicin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TOP2A (inhibitor), TOP2B (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 83 matched, 79 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Geodakian_1987.pdf` | Geodakian SV et al., [Pharmacokinetic study of aclarubicin.…, Antibiotiki i meditsinskaia… (1987) | popPK | 9 | not captured | [3480699](https://pubmed.ncbi.nlm.nih.gov/3480699) | The rat study reports a two-compartment model, half-lives of 16–21 hours, and bioavailability values. |
| `Karanes_1983.pdf` | Karanes C et al., Phase I trial of aclacinomycin-A. A cli…, Investigational new drugs (1983) | popPK | 9 | [10.1007/BF00172077](https://doi.org/10.1007/BF00172077) | [6590531](https://pubmed.ncbi.nlm.nih.gov/6590531) | Human plasma pharmacokinetics report a two-compartment disposition model and numeric half-lives. |

<sub>queue written 2026-10-06T15:54:48.410084+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gaussem_2002 | irrelevant | 0 | 0 | The study reports pharmacokinetics of S 18326, not aclarubicin. |
| popPK | Kamp_2021 | irrelevant | 0 | 0 | This study reports ketamine pharmacodynamics, not aclarubicin pharmacokinetics. |
| popPK | Lammers_2017 | irrelevant | 0 | 0 | This human CYP-probe cocktail study reports pharmacokinetics for other drugs, not aclarubicin. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | Aclarubicin is only a co-administered drug; the reported PK parameters are for venetoclax. |
| popPK | Löffler_2025 | irrelevant | 0 | 0 | This perspective reports no aclarubicin pharmacokinetic parameters or measured disposition data. |
| popPK | Matthews_2024 | irrelevant | 0 | 0 | The study examines other drugs in human-derived cardiomyocytes and reports no aclarubicin pharmacokinetic parameters. |
| popPK | McKeown_2024 | irrelevant | 0 | 0 | This is an in-vitro anticancer-compound study and reports no aclarubicin pharmacokinetic parameters. |
| popPK | Megías-Vericat_2019 | irrelevant | 0 | 0 | Aclarubicin is only mentioned in passing, with no aclarubicin-specific pharmacokinetic parameters or numeric values reported. |
| popPK | Mohammed_2008 | irrelevant | 0 | 0 | This study reports warfarin pharmacokinetics, not aclarubicin. |
| popPK | Schwach_2024 | irrelevant | 0 | 0 | This in-vitro cardiotoxicity study reports no quantitative aclarubicin disposition parameters. |
| popPK | Simons_2022 | irrelevant | 0 | 0 | This paper reports pharmacodynamic results for S-ketamine in human volunteers, not pharmacokinetic parameters for aclarubicin. |
| popPK | Simons_2022_2 | irrelevant | 0 | 0 | The study reports quantitative population pharmacokinetics for S-ketamine and its metabolites, not aclarubicin. |
| popPK | Stamos_2025 | irrelevant | 0 | 0 | The paper studies ACBI1 crystallization and atropisomerism, not aclarubicin pharmacokinetics, and reports no aclarubicin disposition values. |
| PGx | Twentyman_1986 | not_relevant | 0 | 0 | No gene variant, genotype, or phenotype is reported; the study examines acquired drug resistance and verapamil effects in cell lines. |
| PGx | Yuan_2019 | not_relevant | 1 | 2 | DNMT3A R882 status is associated with remission after induction therapy that includes aclarubicin, but the paper reports no aclarubicin-specific PK or PD parameter. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 15:55 UTC</sub>
